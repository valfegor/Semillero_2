const Board = require("../models/board");
const mongoose = require("mongoose");
//manejador de archivos
const fs = require("fs");
//path rutas internas
const path = require("path");
//para las fechas en tiempo real de mongo
const moment = require("moment");

const saveTask = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send("Incomplete data");

  let board = new Board({
    userId: req.user._id,
    name: req.body.name,
    description: req.body.description,
    taskStatus: "to-do",
  });

  let result = await board.save();
  if (!result) return res.status(400).send("Error registering task");
  return res.status(200).send({ result });
};

const listTask = async (req, res) => {
  //aqui busca solamente por el re.user._id esto quiere decir tan pronto se logee
  let board = await Board.find({ userId: req.user._id });
  if (!board || board.length === 0)
    return res.status(400).send("You have no assigned tasks");
  return res.status(200).send({ board });
};

  //funcion de guardar imagen
  const saveTaskImg = async (req, res) => {
    if (!req.body.name || !req.body.description)
    return res.status(400).send("Incomplete data");
    //necesitamos generar una URL para cargar la imagen
    let imageUrl = ""; //http://localhost:3001/
    console.log(req.files);
    //si viene la imagen o si viene otro tipo de archivo no soportado
    if(req.files !== undefined && req.files.image.type){
      //la palabra protocol es la primera parte de la url es decir el protocolo HTTP del request obtenemos el host que llegue
      let url = req.protocol + "://" + req.get('host')+"/";
      //aqui va a quedar la imagen en nuestro servidor
      //queda de la siguiente manera //http:localhost:3001/uploads/57485 -c:user/desktop/js.png (codigo que saquemos por fecha) el path + el nombre de la extension
      //el path es la ruta de donde se cargo , es decir sacar la extension
      let serverImg = "./uploads/" + moment().unix() + path.extname(req.files.image.path);
      //leer se encarga de tomar el archivo , por favor cargue la imagen
      //Despues de leer se escribe es la carpeta donde va a quedar guardado como se llama y la extension , ya con esta linea queda guardado en la carpeta uploads.
      fs.createReadStream(req.files.image.path).pipe(fs.createWriteStream(serverImg));
        //en la bd vamos a guardar un campo.

      imageUrl = url + "uploads/" + moment().unix() + path.extname(req.files.image.path);
    }
  let board = new Board({
    userId: req.user._id,
    name: req.body.name,
    description: req.body.description,
    taskStatus: "to-do",
    imageUrl:imageUrl,
  });

  let result = await board.save();
  if (!result) return res.status(400).send("Error registering task");
  return res.status(200).send({ result });

  };

const updateTask = async (req, res) => {
  let validId = mongoose.Types.ObjectId.isValid(req.body._id);
  if (!validId) return res.status(400).send("Invalid id");

  if (!req.body._id || !req.body.taskStatus)
    return res.status(400).send("Incomplete data");

  let board = await Board.findByIdAndUpdate(req.body._id, {
    userId: req.user._id,
    taskStatus: req.body.taskStatus,
  });

  if (!board) return res.status(400).send("Task not found");
  return res.status(200).send({ board });
};

const deleteTask = async (req, res) => {
  let validId = mongoose.Types.ObjectId.isValid(req.params._id);
  if (!validId) return res.status(400).send("Invalid id");

  let board = await Board.findByIdAndDelete(req.params._id);
  if (!board) return res.status(400).send("Task not found");
  return res.status(200).send("Task deleted");
};

module.exports = { saveTask, listTask, updateTask, deleteTask, saveTaskImg };
