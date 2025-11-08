#!/usr/bin/env node
/**
 * Script de limpeza completa do build e cache
 * Remove todos os artefatos de build e cache do projeto
 */
import { execSync } from 'child_process';
import { existsSync, rmSync } from 'fs';
import { join } from 'path';

const rootDir = process.cwd();

const cacheDirs = [
  '.next',
  'node_modules/.cache',
  'public/.next',
  'static/.cache',
  '.turbo',
  '.swc',
];

console.log('🧹 Iniciando limpeza completa do build...\n');

let cleaned = 0;
cacheDirs.forEach((dir) => {
  const fullPath = join(rootDir, dir);
  if (existsSync(fullPath)) {
    try {
      rmSync(fullPath, { recursive: true, force: true });
      console.log(`✅ Removido: ${dir}`);
      cleaned++;
    } catch (error) {
      console.warn(`⚠️  Erro ao remover ${dir}:`, error.message);
    }
  } else {
    console.log(`ℹ️  Não encontrado: ${dir}`);
  }
});

console.log(`\n✅ Limpeza concluída! ${cleaned} diretório(s) removido(s).`);
console.log('\n💡 Próximos passos:');
console.log('   npm run build  - Para fazer build limpo');
console.log('   npm run dev    - Para iniciar servidor de desenvolvimento');




