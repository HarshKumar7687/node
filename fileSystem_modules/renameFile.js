const fs = require('fs');

fs.rename('example.txt','file.txt',(err)=>{
    if(err) console.log(err);
    else console.log("Renamed Sucessfully!!!")
})