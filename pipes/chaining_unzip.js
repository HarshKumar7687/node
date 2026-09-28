// Connection multiple pipes together in sequence

const fs = require('fs');

//compress files
const zlib = require('zlib');
const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream('./output.txt.gz');
const writeStream = fs.createWriteStream('./uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);