const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Hello World!");
        res.end();
    }else{
        res.write("You are on wrong url");
        res.end();
    }
})

server.listen("3000");