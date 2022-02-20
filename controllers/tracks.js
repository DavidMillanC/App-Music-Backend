const Album = require("../models/album");
const Tracks = require("../models/tracks");

function getTrackById(req, res) {
  const idTrack = req.params.id;
  Tracks.findById(idTrack).exec((err, track) => {
    if (err) {
      res.status(500).send({
        message: "Error del servidor",
      });
    } else {
      if (track) {
        res.status(200).send({
          track,
        });
      } else {
        res.status(404).send({
          message: "No hay track...!",
        });
      }
    }
  });
}

function saveTrack(req, res) {
  const track = new Tracks();
  const params = req.body;
  Album.findById(params.album).exec((err, album) => {
    if (album) {
      if (params.name) {
        track.name = params.name;
        track.url = params.url;
        track.album = album;
        track.save((err, trackStored) => {
          if (err) {
            res.status(500).send({
              mensaje: "Error del servidor",
            });
          } else {
            if (trackStored) {
              res.status(200).send({
                track: trackStored,
              });
            } else {
              res.status(200).send({
                mensaje: "No se pudo guardar la canción",
              });
            }
          }
        });
      } else {
        res.status(200).send({
          mensaje: "Nombre Obligatorio",
        });
      }
    }
  });
}

function getTrackByAlbumId(req, res) {
  const id = req.params.id;
  Tracks.find({ "album._id": id }).exec((err, track) => {
    if (err) {
      res.status(500).send({
        message: "Error del servidor",
      });
    } else {
      if (track) {
        res.status(200).send({
          track,
        });
      } else {
        res.status(404).send({
          message: "No hay track...!",
        });
      }
    }
  });
}

function updateTrack(req, res) {
  const idTrack = req.params.id;
  const other = {
    _id: String,
    imagen: String,
    nombre: String,
    autor: String,
  };
  const update = req.body;
  Album.find({ _id: update.album }).exec((err, albumEncontrado) => {
    if (albumEncontrado) {
      other._id = albumEncontrado[0]._id;
      other.imagen = albumEncontrado[0].imagen;
      other.nombre = albumEncontrado[0].nombre;
      other.autor = albumEncontrado[0].autor;
      update.album = other;
      Tracks.findByIdAndUpdate(
        idTrack,
        update,
        { new: true },
        (err, trackUpdated) => {
          if (err) {
            res.status(500).send({
              message: "Error del servidor",
            });
          } else {
            if (trackUpdated) {
              res.status(200).send({
                track: trackUpdated,
              });
            } else {
              res.status(404).send({
                message: "No existe la canción...!",
              });
            }
          }
        }
      );
    }
  });
}

function deleteTrack(req, res) {
  const idTrack = req.params.id;

  Tracks.findByIdAndRemove(idTrack, (err, trackRemoved) => {
    if (err) {
      res.status(500).send({
        message: "Error del servidor",
      });
    } else {
      if (trackRemoved) {
        res.status(200).send({
          track: trackRemoved,
        });
      } else {
        res.status(404).send({
          message: "No existe la canción...!",
        });
      }
    }
  });
}

module.exports = {
  getTrackById,
  getTrackByAlbumId,
  saveTrack,
  updateTrack,
  deleteTrack,
};
