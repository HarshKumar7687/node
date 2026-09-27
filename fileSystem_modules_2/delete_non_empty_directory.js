const fs = require('fs');

fs.rm("./Sample",{recursive:true},(err)=>{
    if(err) console.log(err);
    else console.log("Folder Deleted Sucessfully!!!!")
})