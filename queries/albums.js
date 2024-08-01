const db = require("../db/dbConfig.js");

const getAllAlbums = async (playlist_id) => {
  try {
    const allAlbums = await db.any(
      "SELECT * FROM albums WHERE playlist_id=$1",
      playlist_id
    );
    return allAlbums;
  } catch (err) {
    return err;
  }
};

const getAlbum = async (id) => {
  try {
    const album = await db.one("SELECT * FROM albums WHERE id=$1", id);
    return album;
  } catch (err) {
    return err;
  }
};

const createAlbum = async (album) => {
  try {
    const createdAlbum = await db.one(
      "INSERT INTO albums (title, artist, release_date, playlist_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [album.title, album.artist, album.release_date, album.playlist_id]
    );
    return createdAlbum;
  } catch (err) {
    return err;
  }
};

const deleteAlbum = async (id) => {
  try {
    const deletedAlbum = await db.one(
      "DELETE FROM albums WHERE id=$1 RETURNING *",
      id
    );
    return deletedAlbum;
  } catch (err) {
    return err;
  }
};

const updateAlbum = async (album) => {
  try {
    const updatedAlbum = await db.one(
      "UPDATE albums SET title=$1, artist=$2, release_date=$3, playlist_id=$4 WHERE id=$5 RETURNING *",
      [album.title, album.artist, album.release_date, album.playlist_id, id]
    );
    return updatedAlbum;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllAlbums,
  getAlbum,
  createAlbum,
  deleteAlbum,
  updateAlbum,
};
