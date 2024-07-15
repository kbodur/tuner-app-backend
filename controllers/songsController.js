const express = require("express");
const songs = express.Router();
const { getAllSongs, createSong, getSong, deleteSong, updateSong } = require('../queries/songs') 
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


// DELETE
songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong.id) {
      res.status(200).json({message: "Successfully deleted song."});
    } else {
      res.status(404).json({error: "Song not found"});
    }
  });
  
  // UPDATE
  songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
  });


module.exports = songs;


