const express = require("express");
const path = require("path");

// Body Parser in Node.js/Express is used to read data sent by the client in the request body.
const bodyParser = require("body-parser");
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'static','form.html'));
})
app.post("/",(req,res)=>{
    console.log(req.body);
    //database work here
    res.send("Data Posted Sucessfully!!!");
})
app.listen(3002);