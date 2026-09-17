// Compila o Tailwind pra css/tailwind.css (minificado) e grava um ?v=<hash> nos <link> do index.html
// pra invalidar o cache de 30 dias do Nginx. Uso: npm run build:css
import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

execSync('npx tailwindcss -c tailwind.config.js -i src/tailwind.css -o css/tailwind.css --minify', { stdio: 'inherit' });

const hash = (f) => createHash('sha256').update(readFileSync(f)).digest('hex').slice(0, 8);
let html = readFileSync('index.html', 'utf8');
for (const file of ['css/tailwind.css', 'css/fonts.css']) {
  const prefix = `href="${file}`;
  const start = html.indexOf(prefix);
  if (start < 0) throw new Error(`<link> pra ${file} não encontrado no index.html`);
  const end = html.indexOf('"', start + prefix.length); // fecha o atributo (com ou sem ?v= antigo)
  html = html.slice(0, start) + `${prefix}?v=${hash(file)}` + html.slice(end);
  console.log(`${file} -> ?v=${hash(file)}`);
}
writeFileSync('index.html', html);
