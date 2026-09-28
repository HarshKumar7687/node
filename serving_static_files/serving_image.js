const http = require("http");
const fs = require("fs");

http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/SPIDERMAN.png');
    res.writeHead(200,{'content-type':'image/png'});
    readStream.pipe(res);
}).listen(3000);
