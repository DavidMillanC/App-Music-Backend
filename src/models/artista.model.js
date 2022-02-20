const mongoose = require("mongoose");
const schema = mongoose.Schema;

const artistaSchema = schema({
  imagen: String,
  nombre: String,
  edad: Number,
  nacionalidad: String,
  seguidores: String,
  resena: String,
  video: String,
});

module.exports = mongoose.model("artista", artistaSchema);
