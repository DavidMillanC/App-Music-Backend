var express = require("express");
const { model } = require("mongoose");
var app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // Métodos request que desea permitir
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Header request que desea permitir
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Establecer en verdadero si necesita que el sitio web incluya cookies en las solicitudes enviadas
  // a la API (por ejemplo, en caso de que use sesiones)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pasar a la siguiente capa de middleware
  next();
});
app.use(express.urlencoded({ extended: true }));

// rutas
var artista_routes = require("./routes/artista");
var album_routes = require("./routes/album");
var track_routes = require("./routes/tracks");

//ruta base
app.use("/", artista_routes);
app.use("/", album_routes);
app.use("/", track_routes);

//RUTAS
app.get("/", (req, res) => {
  res.status(200).send({
    mensaje: "ruta de prueba de mi api con node",
  });
});

module.exports = app;
