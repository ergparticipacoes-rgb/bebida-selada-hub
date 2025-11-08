#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function formatScore(score) {
  if (score === null || score === undefined) return 'N/A';
  const pct = Math.round(score * 100);
  if (pct >= 90) return `${colors.green}${pct}${colors.reset}`;
  if (pct >= 50) return `${colors.yellow}${pct}${colors.reset}`;
  return `${colors.red}${pct}${colors.reset}`;
}

async function runBuild() {
  log('\n🔨 Executando build do projeto...', 'cyan');
  try {
    await execAsync('npm run build', { cwd: rootDir });
    log('✅ Build concluído com sucesso!', 'green');
    return true;
  } catch (err) {
    log('❌ Erro ao executar build:', 'red');
    console.error(err);
    return false;
  }
}

async function ensureReportsDir() {
  const reportsDir = path.join(rootDir, 'reports');
  if (!existsSync(reportsDir)) {
    await mkdir(reportsDir, { recursive: true });
    log(`📁 Pasta /reports criada`, 'blue');
  }
  return reportsDir;
}

// Função detectPort removida - usando porta fixa 3000

async function runLighthouse() {
  log('\n🔍 Executando auditoria Lighthouse...', 'cyan');

  const url = 'http://localhost:3000';
  log(`📡 Analisando URL: ${url}`, 'blue');

  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: undefined,
  };

  let chrome = null;
  try {
    chrome = await chromeLauncher.launch({
      chromeFlags: ['--headless', '--no-sandbox'],
    });
    options.port = chrome.port;

    // Aguarda o servidor responder antes de auditar
    log('⏳ Aguardando servidor responder completamente...', 'cyan');
    let ready = false;
    for (let i = 0; i < 10; i++) {
      try {
        const { stdout } = await execAsync(`curl -s -o /dev/null -w "%{http_code}" ${url}`);
        if (stdout.trim() === '200') {
          ready = true;
          log('✅ Servidor respondeu com sucesso. Iniciando auditoria...', 'green');
          break;
        }
      } catch {}
      await new Promise(r => setTimeout(r, 2000)); // espera 2 segundos antes da próxima tentativa
    }
    if (!ready) {
      log('⚠️ Servidor não respondeu a tempo, mas prosseguindo mesmo assim...', 'yellow');
    }

    const runnerResult = await lighthouse(url, options);

    const scores = {
      performance: runnerResult.lhr.categories.performance?.score,
      accessibility: runnerResult.lhr.categories.accessibility?.score,
      'best-practices': runnerResult.lhr.categories['best-practices']?.score,
      seo: runnerResult.lhr.categories.seo?.score,
    };

    // PWA detection manual (service-worker e manifest-exists)
    const audits = runnerResult.lhr.audits;
    const pwaOk = audits['service-worker']?.score === 1 && audits['manifest-exists']?.score === 1;
    scores.pwa = pwaOk ? 1 : 0;

    const reportsDir = await ensureReportsDir();
    const reportPath = path.join(reportsDir, 'lighthouse-report.html');
    await writeFile(reportPath, runnerResult.report);

    return { scores, reportPath };
  } finally {
    if (chrome) await chrome.kill();
  }
}

function displayScores(scores, reportPath) {
  log('\n' + '='.repeat(50), 'cyan');
  log('📊 RESULTADOS DA AUDITORIA LIGHTHOUSE', 'cyan');
  log('='.repeat(50), 'cyan');
  log(`Performance:        ${formatScore(scores.performance)}`);
  log(`Acessibilidade:      ${formatScore(scores.accessibility)}`);
  log(`Boas Práticas:       ${formatScore(scores['best-practices'])}`);
  log(`SEO:                 ${formatScore(scores.seo)}`);
  log(`PWA:                 ${formatScore(scores.pwa)}`);
  log('='.repeat(50), 'cyan');
  log(`📄 Relatório HTML salvo em: ${reportPath}`, 'green');
  log('='.repeat(50) + '\n', 'cyan');
}

async function startServer() {
  log('\n🚀 Iniciando servidor Next.js...', 'cyan');
  const serverProcess = exec('npm start', { cwd: rootDir, stdio: 'ignore' });
  log('⏳ Aguardando servidor iniciar...', 'cyan');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return serverProcess;
}

async function killServer(serverProcess) {
  if (serverProcess) {
    log('\n🛑 Encerrando servidor...', 'cyan');
    serverProcess.kill();
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
}

async function main() {
  let serverProcess = null;
  try {
    const buildSuccess = await runBuild();
    if (!buildSuccess) process.exit(1);

    serverProcess = await startServer();

    const { scores, reportPath } = await runLighthouse();
    displayScores(scores, reportPath);
  } catch (error) {
    log('\n❌ Erro durante a execução:', 'red');
    console.error(error);
    process.exit(1);
  } finally {
    await killServer(serverProcess);
  }
}

main();
