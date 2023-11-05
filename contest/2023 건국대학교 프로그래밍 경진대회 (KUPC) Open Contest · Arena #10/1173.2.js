const fs = require('fs');
const input = fs.readFileSync('1173.2.txt').toString();

console.log(+input % 2 ? 'Goose' : 'Duck');
