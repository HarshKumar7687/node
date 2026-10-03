const express = require('express');
const app = express();
const fs = require('fs');
const Gods = require('./assets/gods.js');

app.use(express.json());
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("Hello World!");
});

app.get("/api/gods",(req,res)=>{
    res.send(Gods);
});
app.get("/api/gods/:id",(req,res)=>{
    let god = Gods.find(god=>god.id==req.params.id);
    if(!god){
        res.send(`Currently, we have ${Gods.length} gods in our dictionary. Please check the ID and try again. Or you can add a new god to the dictionary.`);
    } else {
        res.send(god);
    }
});


app.post("/api/gods",(req,res)=>{
    if(!req.body){
        return res.status(404).send("Request Empty");
    }
    let god = {
        id: Gods.length + 1,
        name: req.body.name,
        divineName: req.body.divineName,
        domain: req.body.domain,
        weapon: req.body.weapon,
        mount: req.body.mount,
        abode: req.body.abode,
        consort: req.body.consort,
        symbol: req.body.symbol,
        festival: req.body.festival,
        favouriteMantra: req.body.favouriteMantra,
        isMajorDeity: req.body.isMajorDeity || false,
        imageUrl: req.body.imageUrl
    }
    Gods.push(god);
    fs.writeFile("./assets/gods.js",`const Gods = ${JSON.stringify(Gods, null, 2)};\n\nmodule.exports = Gods;`,
        (err) => {
            if (err) {
                console.error("Error writing to file:", err);
                return res.status(500).send("Error saving god to dictionary");
            }
            res.status(201).send(god);
        }
    );
});


app.put("/api/gods/:id",(req,res)=>{
    let god = Gods.find(god=>god.id==req.params.id);
    if(!god){
        return res.status(404).send("God not found");
    }
    if(req.body.name !== undefined) god.name = req.body.name;
    if(req.body.divineName !== undefined) god.divineName = req.body.divineName;
    if(req.body.domain !== undefined) god.domain = req.body.domain;
    if(req.body.weapon !== undefined) god.weapon = req.body.weapon;
    if(req.body.mount !== undefined) god.mount = req.body.mount;
    if(req.body.abode !== undefined) god.abode = req.body.abode;
    if(req.body.consort !== undefined) god.consort = req.body.consort;
    if(req.body.symbol !== undefined) god.symbol = req.body.symbol;
    if(req.body.festival !== undefined) god.festival = req.body.festival;
    if(req.body.favouriteMantra !== undefined) god.favouriteMantra = req.body.favouriteMantra;
    if(req.body.isMajorDeity !== undefined) god.isMajorDeity = req.body.isMajorDeity;
    if(req.body.imageUrl !== undefined) god.imageUrl = req.body.imageUrl;
    fs.writeFile("./assets/gods.js",`const Gods = ${JSON.stringify(Gods, null, 2)};\n\nmodule.exports = Gods;`,
        (err) => {
            if (err) {
                console.error("Error writing to file:", err);
                return res.status(500).send("Error saving god to dictionary");
            }
            res.send(god);
        }
    );
});

app.delete("/api/gods/:id",(req,res)=>{
    let god = Gods.find(god=>god.id==req.params.id);
    if(!god){
        return res.status(404).send("God not found");
    }
    const index = Gods.indexOf(god);
    Gods.splice(index, 1);
    fs.writeFile("./assets/gods.js",`const Gods = ${JSON.stringify(Gods, null, 2)};\n\nmodule.exports = Gods;`,
        (err) => {
            if (err) {
                console.error("Error writing to file:", err);
                return res.status(500).send("Error deleting god from dictionary");
            }
            res.send("God deleted successfully");
        }
    );
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});