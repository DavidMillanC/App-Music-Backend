const Album = require("../models/album.model");

function getAlbum(req, res) {
  Album.find((err, autorList) => {
    if (err) {
      res.status(500).send({
        message: "Error!!",
      });
    } else {
      if (autorList) {
        res.status(200).json({
          Albums: autorList,
        });
      }
    }
  });
}

function getByIdAlbum(req, res) {
  const idAlbum = req.params.id;
  Album.findById(idAlbum).exec((err, album) => {
    if (err) {
      res.status(500).send({
        message: "Error del servidor",
      });
    } else {
      if (album) {
        res.status(200).send({
          album,
        });
      } else {
        res.status(404).send({
          message: "No hay album...!",
        });
      }
    }
  });
}

function saveAlbum(req, res) {
  const album = new Album();
  const params = req.body;
  if (params.nombre) {
    album.imagen = params.imagen;
    album.nombre = params.nombre;
    album.autor = params.autor;
    album.lanzamiento = params.lanzamiento;
    album.save((err, albumStored) => {
      if (err) {
        res.status(500).send({
          mensaje: "Error del servidor",
        });
      } else {
        if (albumStored) {
          res.status(200).send({
            album: albumStored,
          });
        } else {
          res.status(200).send({
            mensaje: "No se pudo guardar album",
          });
        }
      }
    });
  } else {
    res.status(200).send({
      mensaje: "Nombres Obligatorio",
    });
  }
}

function updateAlbum(req, res) {
  const idAlbum = req.params.id;
  const update = req.body;
  Album.findByIdAndUpdate(
    idAlbum,
    update,
    { new: true },
    (err, albumUpdated) => {
      if (err) {
        res.status(500).send({
          message: "Error del servidor",
        });
      } else {
        if (albumUpdated) {
          res.status(200).send({
            album: albumUpdated,
          });
        } else {
          res.status(404).send({
            message: "No existe el album...!",
          });
        }
      }
    }
  );
}

function deleteAlbum(req, res) {
  const idAlbum = req.params.id;
  Album.findByIdAndRemove(idAlbum, (err, albumRemoved) => {
    if (err) {
      res.status(500).send({
        message: "Error del servidor",
      });
    } else {
      if (albumRemoved) {
        res.status(200).send({
          Album: albumRemoved,
        });
      } else {
        res.status(404).send({
          message: "No existe el Album...!",
        });
      }
    }
  });
}

module.exports = {
  getAlbum,
  getByIdAlbum,
  saveAlbum,
  updateAlbum,
  deleteAlbum,
};
