//Express.js is a web framework for node.js that makes it easier to build webservers and REST APIs

const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("HOME PAGE!!!")
});
app.get("/example",(req,res)=>{
    res.send("EXAMPLE PAGE!!!")
});

//route parameters
app.get("/example/:name/:age",(req,res)=>{
    console.log(req.params);
    // res.send("EXAMPLE PAGE WITH PARAMETERS!!!")
    res.send(req.params.name+" : "+req.params.age);
})

app.listen(3000);