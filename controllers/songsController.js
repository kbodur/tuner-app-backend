const express = require("express");
const songs = express.Router({ mergeParams: true });
const { getAllSongs, createSong, getSong, deleteSong, updateSong } = require('../queries/songs');
const { checkName, checkArtist } = require("../validations/checkSongs");
const { getAlbum } = require("../queries/albums");
// INDEX
songs.get("/", async (req, res) => {
  const { album_id } = req.params;
  const songs = await getAllSongs(album_id);
  const album = await getAlbum(album_id)
  if (album.id) {
    res.status(200).json({...album, songs});
  } else {
    res.status(500).json({ error: "Internal Server Error or Album not found" });
  }
});

// SHOW
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  const album = await getAlbum(album_id)
  if (song) {
    res.status(200).json(...song, album);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
songs.post("/", async (req, res) => {
  const { album_id } = req.params;
  const song = await createSong({ ...req.body, album_id });
    res.status(200).json(song);
});

// DELETE
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json({ error: "Song not found" });
  }
});

// UPDATE
songs.put("/:id", async (req, res) => {
  const { id, album_id } = req.params;
  const updatedSong = await updateSong(album_id, id, ...req.body);
  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json({ error: "Song not found" });
  }
});

module.exports = songs;
