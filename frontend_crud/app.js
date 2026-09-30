const express = require('express');
const app = express();
const fs = require('fs');
const superHeroes = require('./assets/superHeroes.js');


app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World!");
});

app.get("/api/heroes",(req,res)=>{
    res.send(superHeroes);
});
app.get("/api/heroes/:id",(req,res)=>{
    let hero = superHeroes.find(hero=>hero.id==req.params.id)
    if(!hero){
        res.send(`Hero not Found! Only ${superHeroes.length} are available`);
    }
    res.send(hero);
});

app.post("/api/heroes",(req,res)=>{
    if(!req.body){
        res.status(404).send("Request Empty");
    }
    let hero = {
        id: req.body.id,
        name : req.body.name,
        realName : req.body.realName,
        power : req.body.power,
        team : req.body.team,
        age : req.body.age,
        city : req.body.city,
        isActive : req.body.isActive,
        imageUrl : req.body.imageUrl
    };
    superHeroes.push(hero);
    fs.writeFile(
        "./assets/superHeroes.js",
        `const superHeroes = ${JSON.stringify(superHeroes, null, 2)};\n\nmodule.exports = superHeroes;`,
        (err) => {
            if (err) {
                return res.status(500).send("Error writing file");
            }

            res.status(201).send(hero);
        }
    );
    res.send(hero);
})

app.listen(3000);