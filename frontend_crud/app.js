const express = require('express');
const app = express();
const fs = require('fs');
const superHeroes = require('./assets/superHeroes.js');


app.use(express.json());



//GET REQUESTS
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



//POST REQUESTS
app.post("/api/heroes",(req,res)=>{
    if(!req.body){
        return res.status(404).send("Request Empty");
    }
    let hero = {
        id: superHeroes.length+1,
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
    //${JSON.stringify(superHeroes, null, 2)} = list,replacer,space 
    // [repalcer is null means Don't filter or modify anything. Include everything.]
    // [space is 2 gives indentation]
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
})



//PUT REQUESTS
app.put("/api/heroes/:id",(req,res)=>{
    let hero = superHeroes.find(hero=>hero.id==req.params.id);
    if(!hero){
        return res.status(400).send("Hero not Found!! cant update!");
    }
    if (req.body.name !== undefined) {
        hero.name = req.body.name;
    }

    if (req.body.realName !== undefined) {
        hero.realName = req.body.realName;
    }

    if (req.body.power !== undefined) {
        hero.power = req.body.power;
    }

    if (req.body.team !== undefined) {
        hero.team = req.body.team;
    }

    if (req.body.age !== undefined) {
        hero.age = req.body.age;
    }

    if (req.body.city !== undefined) {
        hero.city = req.body.city;
    }

    if (req.body.isActive !== undefined) {
        hero.isActive = req.body.isActive;
    }

    if (req.body.imageUrl !== undefined) {
        hero.imageUrl = req.body.imageUrl;
    }

    fs.writeFile(
        "./assets/superHeroes.js",
        `const superHeroes = ${JSON.stringify(superHeroes, null, 2)};\n\nmodule.exports = superHeroes;`,
        (err) => {
            if (err) {
                return res.status(500).send("Error writing file");
            }

            res.status(200).send(hero);
        }
    );
});


//DELETE REQUESTS
app.delete("/api/heroes/:id",(req,res)=>{
    const hero = superHeroes.find(hero=>hero.id==req.params.id);
    if(!hero){
        return res.status(400).send("Hero NOT FOUND!!!")
    }
    const index = superHeroes.indexOf(hero)
    superHeroes.splice(index,1);
    fs.writeFile(
        "./assets/superHeroes.js",
        `const superHeroes = ${JSON.stringify(superHeroes, null, 2)};\n\nmodule.exports = superHeroes;`,
        (err) => {
            if (err) {
                return res.status(500).send("Error writing file");
            }

            res.status(200).send(hero);
        }
    );

})

app.listen(3000,()=>{
    console.log(`Server Running on port 3000....`)
});