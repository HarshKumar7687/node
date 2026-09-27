const fs = require('fs');

fs.mkdir("Sample",(err)=>{
    if(err) {
        console.log(err);
    } else {
        console.log("Folder Created Sucessfully!!!");
        fs.writeFile("./Sample/index.txt","This is My File.\n",(err)=>{
            if(err) {
                console.log(err);
            }else{
                fs.readFile("./Sample/index.txt","utf8",(err,file)=>{
                    if(err) console.log(err);
                    else console.log(file)
                })
            }
        })
    }
})