const Tablero = require('../models/tablero');

const registerBoard = async (req, res) => {

    if(!req.body.name || !req.body.description) return res.status(400).send("Sorry check the camps");

    const existTablero = await Tablero.findOne({name: req.body.name});

    if(existTablero) return res.status(400).send(" Sorry the board already exist");

    const tablero = new Tablero({
        name: req.body.name,
        description: req.body.description,
        owner:req.user.name,
        userId:req.user._id,
    })

    let result = await tablero.save();

    if(!result) return res.status(400).send("Sorry not found");

    return res.status(200).send({tablero})
}

const listBoards= async (req, res) => {

    if(!req.user._id) return res.status(400).send("Sorry");

    let tablero = await Tablero.find({ userId: req.user._id});

    if(!tablero) return res.status(400).send('Sorry no boards');

    return res.status(200).send({tablero});
}

module.exports = {registerBoard,listBoards}