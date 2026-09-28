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
    console.log(req.query);
    res.send(req.params.name+" : "+req.params.age);
})

app.listen(3000);



/*
http://localhost:3000/example/Harsh/21?tutorial=NODEJS&sortBy=age
req.params = { name: 'Harsh', age: '21' }
req.query = { tutorial: 'NODEJS', sortBy: 'age' }
*/