const express = require("express");

const server = express();

server.use(express.json());

const Roommates = require("../roommates/roommates-model.js");

server.get("/", (req, res) => {
  res.status(200).json({ message: "he" });
});

let roomies = [
  {
    id: 1,
    name: "Max"
  }
];

let nextId = 2;

server.post("/roomies", (req, res) => {
  //   console.log(req.body);
  if (req.body.name) {
    roomies.push({ id: nextId, name: req.body.name });
    nextId++;
    res.status(201).json(roomies);
  } else {
    res.status(500).json({ message: "please provide a name and id" });
  }
});

server.delete("/roomies/:id", (req, res) => {
  let roomieExists = false;
  let roomieIndex = null;

  roomies.forEach((roomie, i) => {
    if (roomie.id === parseInt(req.params.id)) {
      roomieExists = true;
      roomieIndex = i;
    }
  });

  if (roomieExists) {
    roomies.splice(roomieIndex, 1);
    res.status(200).json({ message: "deleted" });
  } else {
    res.status(404).json({ message: "that roomie got kicked out" });
  }
});

module.exports = server;
