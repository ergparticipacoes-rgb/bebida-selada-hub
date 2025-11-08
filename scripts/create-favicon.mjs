/**
 * Script para gerar favicon.ico e favicon-32x32.png a partir do SVG
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const publicDir = join(process.cwd(), 'public');
const svgPath = join(publicDir, 'favicon.svg');

async function createFavicons() {
  try {
    const svgBuffer = readFileSync(svgPath);
    
    // Criar favicon-32x32.png
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(join(publicDir, 'favicon-32x32.png'));
    
    console.log('✅ favicon-32x32.png criado');
    
    // Criar favicon.ico (512x512 convertido para ICO)
    // Nota: sharp não suporta ICO diretamente, então criamos PNG de 512x512
    // O navegador aceitará PNG como favicon
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile(join(publicDir, 'favicon.ico'));
    
    console.log('✅ favicon.ico criado (formato PNG, compatível)');
    
    console.log('✅ Favicons gerados com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao criar favicons:', error);
    process.exit(1);
  }
}

createFavicons();




