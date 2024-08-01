const db = require("../db/dbConfig.js");

const getAllPlaylists = async () => {
  try {
    const allPlaylists = await db.any("SELECT * FROM playlists");
    return allPlaylists;
  } catch (err) {
    return err;
  }
};

const getPlaylist = async (id) => {
  try {
    const playlist = await db.one("SELECT * FROM playlists WHERE id=$1", id);
    return playlist;
  } catch (err) {
    return err;
  }
};

const createPlaylist = async (playlist) => {
  try {
    const newPlaylist = await db.one(
      "INSERT INTO playlists (name, description, is_favorite) VALUES ($1, $2, $3) RETURNING *",
      [playlist.name, playlist.description, playlist.is_favorite]
    );
    return newPlaylist;
  } catch (err) {
    return err;
  }
};

const deletePlaylist = async (id) => {
  try {
    const deletedPlaylist = await db.one(
      "DELETE FROM playlists WHERE id=$1 RETURNING *",
      id
    );
    return deletedPlaylist;
  } catch (err) {
    return err;
  }
};

const updatePlaylist = async (id, playlist) => {
  try {
    const updatedPlaylist = await db.one(
      "UPDATE playlists SET name=$1, description=$2, is_favorite=$3 WHERE id=$4 RETURNING *",
      [playlist.name, playlist.description,playlist.is_favorite, id]
    );
    return updatedPlaylist;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllPlaylists,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
};
