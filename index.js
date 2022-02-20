var mongoose = require("mongoose");
var app = require("./app");
var port = 3800;

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
