// Pipe connects readable Stream with writable Stream

const fs = require('fs');

const readStream = fs.createReadStream('./input.txt','utf8');
const writeStream = fs.createWriteStream('./output.txt');
readStream.pipe(writeStream);