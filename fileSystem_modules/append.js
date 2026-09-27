const fs = require('fs');

fs.appendFile('file.txt',"add this file",(err)=>{
    if(err) console.log(err);
    else console.log("Appended sucessfully\n");
})