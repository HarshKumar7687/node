const fs = require('fs');

fs.rmdir("Sample",(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("Folder Deleted Sucessfully!!!!")
    }
})