// Connection multiple pipes together in sequence

const fs = require('fs');

//compress files
const zlib = require('zlib');
const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./input.txt','utf8');
const writeStream = fs.createWriteStream('./output.txt.gz');
readStream.pipe(gzip).pipe(writeStream);