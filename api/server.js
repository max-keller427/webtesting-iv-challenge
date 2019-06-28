const express = require("express");

const server = express();

server.use(express.json());

const Roommates = require("../roommates/roommates-model.js");

server.get("/", (req, res) => {
  res.status(200).json({ message: "he" });
});

module.exports = server;
