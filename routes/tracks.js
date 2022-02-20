var express = require("express");
var trackController = require("../controllers/tracks");

var api = express.Router();

api.get("/tracks/:id", trackController.getTrackById);
api.get("/tracks/album/:id", trackController.getTrackByAlbumId);
api.post("/tracks", trackController.saveTrack);
api.put("/tracks/:id", trackController.updateTrack);
api.delete("/tracks/:id", trackController.deleteTrack);
module.exports = api;
