const express = require("express");
const playlists = express.Router();
const { getAllPlaylists, getPlaylist, createPlaylist, deletePlaylist, updatePlaylist } = require("../queries/playlists");
const { checkName, checkDescription } = require('../validations/checkSongs')
// Albums controller
const albumsController = require("./albumsControllers");
playlists.use("/:playlist_id/albums", albumsController);

// Songs controller
const songsController = require('./songsController');
playlists.use("/:playlist_id/albums/:album_id/songs", songsController);

// INDEX
playlists.get("/", async (req, res) => {
    const allPlaylists = await getAllPlaylists();
    // if (allPlaylists[0]) {
      res.status(200).json(allPlaylists);
  //   } else {
  //   res.status(500).json({ error: "Internal Server Error" });
  // }
});

// SHOW
playlists.get("/:id", async (req, res) => {
  const { id } = req.params;

    const playlist = await getPlaylist(id);
    if (playlist) {
      res.status(200).json(playlist);
    } else {
      res.status(404).json({ error: "Playlist not found" });
    }
});

// CREATE
playlists.post("/",checkDescription, checkName, async (req, res) => {
  try {
    const playlist = await createPlaylist(req.body);
  
      res.status(200).json(playlist);
    }catch (error) {
      res.status(400).json({ error: "Failed to create playlist" });
    }
});

// DELETE
playlists.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPlaylist = await deletePlaylist(id);
    if (deletedPlaylist.id) {
      res.status(200).json(deletedPlaylist);
    } else {
      res.status(404).json({ error: "Playlist not found" });
    }
});

// UPDATE
playlists.put("/:id",checkDescription, checkName, async (req, res) => {
  const { id } = req.params;
  const updatedPlaylist = await updatePlaylist(id, req.body);
      res.status(200).json(updatedPlaylist);
    
});

module.exports = playlists;
