const express = require("express");
const albums = express.Router({ mergeParams: true });
const { getAllAlbums, getAlbum, createAlbum, deleteAlbum, updateAlbum } = require("../queries/albums");

// Songs controller
const songsController = require("./songsController");
albums.use("/:album_id/songs", songsController);

// INDEX
albums.get("/", async (req, res) => {
  const { playlist_id } = req.params;
  const allAlbums = await getAllAlbums(playlist_id);
  if (allAlbums[0]) {
    res.status(200).json(allAlbums);
  } else {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// SHOW
albums.get("/:id", async (req, res) => {
  const { id } = req.params;
  const album = await getAlbum(id);
  if (album.id) {
    res.status(200).json(album);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
albums.post("/", async (req, res) => {
  const { playlist_id } = req.params;
  const album = await createAlbum({ playlist_id, ...req.body });
  res.status(200).json(album);
});

// DELETE
albums.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedAlbum = await deleteAlbum(id);
  if (deletedAlbum.id) {
    res.status(200).json(deletedAlbum);
  } else {
    res.status(404).json({ error: "Album not found" });
  }
});

// UPDATE
albums.put("/:id", async (req, res) => {
  const { id, playlist_id } = req.params;
  const updatedAlbum = await updateAlbum(playlist_id, id, ...req.body);
  if (updatedAlbum.id) {
    res.status(200).json(updatedAlbum);
  } else {
    res.status(404).json({ error: "Album not found" });
  }
});

module.exports = albums;
