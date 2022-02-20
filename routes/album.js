var express = require("express");
var albumController = require("../controllers/album");

var api = express.Router();

api.get("/albums", albumController.getAlbum);
api.get("/album/:id", albumController.getByIdAlbum);
api.post("/album", albumController.saveAlbum);
api.put("/album/:id", albumController.updateAlbum);
api.delete("/album/:id", albumController.deleteAlbum);

module.exports = api;
