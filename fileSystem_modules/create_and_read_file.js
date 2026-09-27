// The fs (File System) module allows Node.js to interact with files and folders on your computer/server.

const fs = require('fs');

//create file
fs.writeFile("example.txt","This is an example file.\n",(err)=>{
    if(err) {
        console.log(err);
    }else {
        console.log("File Successfully Created!!!");
        //fs.readFile('example.txt','utf8',(err,file)=>{
        fs.readFile('example.txt',(err,file)=>{
            if(err){
                console.log(err)
            }else{
                console.log(file.toString())
            }
        })
    }
});
