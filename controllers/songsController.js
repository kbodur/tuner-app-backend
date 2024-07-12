const express = require("express");
const songs = express.Router();
const {getAllSongs, createSong, getSong} = require('../queries/songs') 
const { checkName, checkArtist } = require("../validations/checkSongs");

// INDEX
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
      res.status(200).json(allSongs);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });
//SHOW  
  songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const singleSong = await getSong(id);
    if (singleSong.id) {
      res.json(singleSong);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });
 
  
// CREATE
  songs.post("/", checkName, checkArtist, async (req, res) => {
    const singleSong = await createSong(req.body);
    res.json(singleSong);
  });  
module.exports = songs;


