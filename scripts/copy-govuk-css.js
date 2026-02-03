import { copyFileSync, cpSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nodeModulesPath = join(__dirname, '../node_modules/govuk-frontend/dist/govuk');
const publicDir = join(__dirname, '../public');
const assetsDir = join(publicDir, 'assets');

try {
  // Create directories if they don't exist
  mkdirSync(publicDir, { recursive: true });
  mkdirSync(assetsDir, { recursive: true });
  
  // Copy CSS file
  const cssSourcePath = join(nodeModulesPath, 'govuk-frontend.min.css');
  const cssDestPath = join(publicDir, 'govuk-frontend.min.css');
  
  if (existsSync(cssSourcePath)) {
    copyFileSync(cssSourcePath, cssDestPath);
    console.log('✅ Successfully copied govuk-frontend.min.css to public/');
  } else {
    console.warn('⚠️  govuk-frontend.min.css not found, skipping...');
  }
  
  // Copy images folder
  const imagesSourcePath = join(nodeModulesPath, 'assets/images');
  const imagesDestPath = join(assetsDir, 'images');
  
  if (existsSync(imagesSourcePath)) {
    cpSync(imagesSourcePath, imagesDestPath, { recursive: true });
    console.log('✅ Successfully copied images folder to assets/images/');
  } else {
    console.warn('⚠️  images folder not found, skipping...');
  }
  
  // Copy fonts folder
  const fontsSourcePath = join(nodeModulesPath, 'assets/fonts');
  const fontsDestPath = join(assetsDir, 'fonts');
  
  if (existsSync(fontsSourcePath)) {
    cpSync(fontsSourcePath, fontsDestPath, { recursive: true });
    console.log('✅ Successfully copied fonts folder to assets/fonts/');
  } else {
    console.warn('⚠️  fonts folder not found, skipping...');
  }
  
  // Copy manifest.json file
  const manifestSourcePath = join(nodeModulesPath, 'assets/manifest.json');
  const manifestDestPath = join(assetsDir, 'manifest.json');
  
  if (existsSync(manifestSourcePath)) {
    copyFileSync(manifestSourcePath, manifestDestPath);
    console.log('✅ Successfully copied manifest.json to assets/');
  } else {
    console.warn('⚠️  manifest.json not found, skipping...');
  }
  
  // Copy rebrand folder
  const rebrandSourcePath = join(nodeModulesPath, 'assets/rebrand');
  const rebrandDestPath = join(assetsDir, 'rebrand');
  
  if (existsSync(rebrandSourcePath)) {
    cpSync(rebrandSourcePath, rebrandDestPath, { recursive: true });
    console.log('✅ Successfully copied rebrand folder to assets/rebrand/');
  } else {
    console.warn('⚠️  rebrand folder not found, skipping...');
  }
  
  console.log('\n✨ All GOV.UK Frontend assets copied successfully!');
} catch (error) {
  console.error('❌ Error copying GOV.UK Frontend assets:', error.message);
  process.exit(1);
}
