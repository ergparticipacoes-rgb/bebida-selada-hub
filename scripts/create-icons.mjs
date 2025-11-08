#!/usr/bin/env node

import sharp from 'sharp';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

async function createIcons() {
  console.log('📱 Criando ícones PWA...');
  
  const icon192 = path.join(publicDir, 'icon-192.png');
  const icon512 = path.join(publicDir, 'icon-512.png');
  const logoSvg = path.join(publicDir, 'logo.svg');
  
  // SVG simples com as cores da marca
  const iconSvg = `
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#001F33" rx="80"/>
  <circle cx="256" cy="256" r="180" fill="#D9B98E" opacity="0.95"/>
  <text x="256" y="300" font-family="Arial, sans-serif" font-size="140" font-weight="bold" fill="#001F33" text-anchor="middle">BS</text>
</svg>`;
  
  try {
    // Cria icon-192.png
    if (!existsSync(icon192)) {
      await sharp(Buffer.from(iconSvg))
        .resize(192, 192)
        .png()
        .toFile(icon192);
      console.log('✅ icon-192.png criado');
    } else {
      console.log('ℹ️  icon-192.png já existe');
    }
    
    // Cria icon-512.png
    if (!existsSync(icon512)) {
      await sharp(Buffer.from(iconSvg))
        .resize(512, 512)
        .png()
        .toFile(icon512);
      console.log('✅ icon-512.png criado');
    } else {
      console.log('ℹ️  icon-512.png já existe');
    }
    
    console.log('✅ Ícones PWA prontos!');
  } catch (error) {
    console.error('❌ Erro ao criar ícones:', error.message);
    process.exit(1);
  }
}

createIcons();
