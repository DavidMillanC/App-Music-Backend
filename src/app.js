const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3800;
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
const artista_routes = require("./routes/artista.route");
const album_routes = require("./routes/album.route");
const track_routes = require("./routes/tracks.route");

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

mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://adminJorge:utmach2022*@cluster0.tfevh.mongodb.net/db-music",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Conexión exitosa!");

    app.listen(port, () => {
      console.log("Serivor corriendo en localhost:3800");
    });
  })
  .catch((err) => console.log(err));
