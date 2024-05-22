//Import
const express = require("express");
const router = express.Router();
const Player = require("../../models/player.js");

//Routes
router.post("/", async (req, res)=>{
    try{
        const createdPlayer = await Player.create(req.body);
        res.status(201).json(createdPlayer);
    }catch(error){
        res.status(500).json({error:error.message});
    }
});

router.get("/", async (req, res)=>{
    try{
        const listOfPlayers = await Player.find();
        res.status(200).json(listOfPlayers);
    }catch(error){
        res.status(500).json({error:error.message});
    }
});


//Export
module.exports = router;