const express = require('express');
const Joi = require('joi'); //used for validations
const app = express();

app.use(express.json());

const superHeroes = [
    {
        id: 1,
        name: "Spiderman",
        power: "Web Shooting"
    },
    {
        id: 2,
        name: "Batman",
        power: "Intelligence"
    },
    {
        id: 3,
        name: "Ironman",
        power: "Technology"
    },
    {
        id: 4,
        name: "Thor",
        power: "Lightning"
    },
    {
        id: 5,
        name: "Flash",
        power: "Speed"
    }
];







// GET REQUESTS
app.get("/",(req,res)=>{
    res.send("Hello World!!!");
});

app.get("/api/heroes",(req,res)=>{
    res.send(superHeroes);
})

app.get("/api/heroes/:id",(req,res)=>{
    const hero = superHeroes.find(hero => hero.id == req.params.id);
    if(!hero) res.status(404).send(`Hero not Found!! <br> Total Heroes Available is ${superHeroes.length}`);
    else res.send(hero);
});

app.get("/api/hero",(req,res)=>{
    res.send(req.query);
});








//POST REQUESTS
app.post("/api/heroes",(req,res)=>{
    const schema = Joi.object({
        name : Joi.string().min(3).required(),
        power: Joi.string().required()
    });
    const result = schema.validate(req.body);
    console.log(result);

    // if(!req.body.name || req.body.name.length<3){
    //     res.status(400).send("Name is required and length should be more than 3");
    //     return;
    // }
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const hero = {
        id : superHeroes.length + 1,
        name : req.body.name,
        power : req.body.power
    };
    superHeroes.push(hero);
    res.send(hero);
});






//PUT REQUESTS
app.put("/api/heroes/:id",(req,res)=>{
    //look for course if doesnt exist return 404
    const hero = superHeroes.find(hero => hero.id == req.params.id);
    if(!hero) res.status(404).send(`Hero not Found!! <br> Total Heroes Available is ${superHeroes.length}`);

    //validate if invalid 400
     const schema = Joi.object({
        name : Joi.string().min(3).required(),
        power: Joi.string().required()
    });
    const result = schema.validate(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //update course
    hero.name = req.body.name;
    hero.power = req.body.power;

    //return updated course
    res.send(hero)
});






//Run this on terminal = $env:PORT=5000
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}...`)
});