const mongoose = require("mongoose");
const schema = mongoose.Schema;

const albumSchema = schema({
  imagen: String,
  nombre: String,
  autor: String,
  lanzamiento: String,
});

module.exports = mongoose.model("album", albumSchema);
