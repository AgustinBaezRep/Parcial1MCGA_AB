const playerModel = require('../models/players.model')
const playerMethods = {}

playerMethods.getPlayers = async (req,res) => {
    try {
        let players = []
        players = await playerModel.find()

        res.status(200).send(res.json({
            succes: true,
            response: players,
            message: "Players founded succesfully"
        }))
    }
    catch {
        res.status(500).send(res.json({
            succes: false,
            message: "Player couldn't be finded",
            exception: "PlayerNotFoundException"
        }))
    }
}

playerMethods.getPlayerByID = async (req,res) => {
    try
    {
        const player = await playerModel.findById(req.params._id)
        res.status(200).send(res.json({
            succes: true,
            response: player,
            message: "Player founded succesfully"
        }))
    }
    catch
    {
        res.status(500).send(res.json({
            succes: false,
            message: "Player couldn't be finded",
            exception: "PlayerNotFoundException"
        }))
    }
}

playerMethods.addPlayer = async (req, res) => {
    try {
        const newPlayer = new playerModel({
            name: req.body.name, 
            surname: req.body.surname, 
            dateOfBirth: req.body.dateOfBirth, 
            quality: req.body.quality
        })
        await newPlayer.save()

        res.status(200).send(res.json({
            succes: true,
            response: newPlayer,
            message: "Player added succesfully"
        }))
    }
    catch {
        res.status(500).send(res.json({
            succes: false,
            message: "Player couldn't be added",
            exception: "PlayerNotAddedException"
        }))
    }
}

playerMethods.updatePlayer = async (req, res) => {
    try
    {
        const player = playerModel.findByIdAndUpdate(req.params._id, req.body, (err, playerUpdate) => {
            if (err){
                res.status(500).send(res.json({
                    succes: false,
                    exception: "PlayerNotModifiedExcepetion",
                    message: "Player couldn't be modified succesfully"
                }))
            }else{
                res.status(200).send(res.json({
                    succes: true,
                    response: playerUpdate,
                    message: "Player modified succesfully"
                }))
            }
        })
    }
    catch
    {
        res.status(500).send(res.json({
            succes: false,
            message: "Player couldn't be modified",
            exception: "PlayerNotModifiedException"
        }))
    }
}

playerMethods.deletePlayer = async (req, res) => {
    try
    {
        const deletedPlayer = await playerModel.remove({_id: req.params._id})
        res.status(200).send(res.json({
            succes: true,
            response: deletedPlayer,
            message: "Player deleted succesfully"
        }))
    }
    catch
    {
        res.status(500).send(res.json({
            succes: false,
            message: "Player couldn't be deleted",
            exception: "PlayerNotDeletedException"
        }))
    }
}

module.exports = playerMethods