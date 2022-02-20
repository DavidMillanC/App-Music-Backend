const express = require("express");
const artistaController = require("../controllers/artista.controller");

const api = express.Router();

api.get("/artistas", artistaController.getArtistas);
api.get("/artista/:id", artistaController.getByIdArtista);
api.post("/artista", artistaController.saveArtista);
api.put("/artista/:id", artistaController.updateArtista);
api.delete("/artista/:id", artistaController.deleteArtista);

module.exports = api;
