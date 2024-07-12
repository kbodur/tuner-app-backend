const cors = require("cors");
const express = require("express");
const app = express();
const songsController = require('./controllers/songsController');

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/songs', songsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
