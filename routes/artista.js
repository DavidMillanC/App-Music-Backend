var express = require("express");
var artistaController = require("../controllers/artista");

var api = express.Router();

api.get("/artistas", artistaController.getArtistas);
api.get("/artista/:id", artistaController.getByIdArtista);
api.post("/artista", artistaController.saveArtista);
api.put("/artista/:id", artistaController.updateArtista);
api.delete("/artista/:id", artistaController.deleteArtista);
module.exports = api;
