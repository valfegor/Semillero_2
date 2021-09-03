const mongoose = require("mongoose");


const tableroSchema = new mongoose.Schema({
    name: String,
    description: String,
    userId: { type: mongoose.Schema.ObjectId, ref: "user" },
    date: { type: Date, default: Date.now },
    owner: String,
})

const tablero = mongoose.model("tablero",tableroSchema);


module.exports = tablero;