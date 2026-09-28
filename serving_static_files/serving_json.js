const http = require("http");
const fs = require("fs");

http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/application.json');
    res.writeHead(200,{'content-type':'application/json'});
    readStream.pipe(res);
}).listen(3000);
