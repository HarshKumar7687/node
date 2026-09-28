//  Streams in Node.js allow data to be processed incrementally in chunks rather than loading the entire data into memory.
//  A Readable Stream reads data from a source, while a Writable Stream writes data to a destination.


const fs = require('fs');

const readStream = fs.createReadStream('./example.txt','utf8');
const writeStream = fs.createWriteStream('./copy.txt');
readStream.on('data',(chunk)=>{
    writeStream.write(chunk);
    console.log(chunk);
})