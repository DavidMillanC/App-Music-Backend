const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tracksSchema = schema({
  name: String,
  url: String,
  album: {
    _id: mongoose.Types.ObjectId,
    imagen: String,
    nombre: String,
    autor: String,
  },
});

module.exports = mongoose.model("tracks", tracksSchema);
