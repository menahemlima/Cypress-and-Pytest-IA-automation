const fs = require('fs');
const { execSync } = require('child_process');
const output = execSync('npx mochawesome-merge', { encoding: 'utf8' });

fs.writeFileSync('report.json', output, { encoding: 'utf8' });
console.log('Relatório gerado: report.json');