const Artista = require("../models/artista");

function getArtistas(req, res) {
  Artista.find((err, artistaList) => {
    if (err) {
      res.status(500).send({
        message: "Error!!",
      });
    } else {
      if (artistaList) {
        res.status(200).json({
          Artista: artistaList,
        });
      }
    }
  });
}

function getByIdArtista(req, res) {
  var idArtista = req.params.id;

  Artista.findById(idArtista).exec((err, Artista) => {
    if (err) {
      res.status(500).send({
        message: "Error del servidor",
      });
    } else {
      if (Artista) {
        res.status(200).send({
          Artista,
        });
      } else {
        res.status(404).send({
          message: "No hay Artista...!",
        });
      }
    }
  });
}

function saveArtista(req, res) {
  var artista = new Artista();
  var params = req.body;
  if (params.nombre) {
    artista.imagen = params.imagen;
    artista.nombre = params.nombre;
    artista.edad = params.edad;
    artista.nacionalidad = params.nacionalidad;
    artista.seguidores = params.seguidores;
    artista.resena = params.resena;
    artista.video = params.video;

    artista.save((err, Artistatored) => {
      if (err) {
        res.status(500).send({
          mensaje: "Error del servidor",
        });
      } else {
        if (Artistatored) {
          res.status(200).send({
            artista: Artistatored,
          });
        } else {
          res.status(200).send({
            mensaje: "No se pudo guardar artista",
          });
        }
      }
    });
  } else {
    res.status(200).send({
      mensaje: "Nombre del Artista Obligatorio",
    });
  }
}
function updateArtista(req, res) {
  var idArtista = req.params.id;
  const update = req.body;
  Artista.findByIdAndUpdate(
    idArtista,
    update,
    { new: true },
    (err, artistaUpdated) => {
      if (err) {
        res.status(500).send({
          message: "Error del servidor",
        });
      } else {
        if (artistaUpdated) {
          res.status(200).send({
            artista: artistaUpdated,
          });
        } else {
          res.status(404).send({
            message: "No existe el artista...!",
          });
        }
      }
    }
  );
}

function deleteArtista(req, res) {
  const idArtista = req.params.id;

  Artista.findByIdAndRemove(idArtista, (err, artistaRemoved) => {
    if (err) {
      res.status(500).send({
        message: "Error del servidor",
      });
    } else {
      if (artistaRemoved) {
        res.status(200).send({
          artista: artistaRemoved,
        });
      } else {
        res.status(404).send({
          message: "No existe el artista...!",
        });
      }
    }
  });
}

module.exports = {
  getArtistas,
  getByIdArtista,
  saveArtista,
  updateArtista,
  deleteArtista,
};
