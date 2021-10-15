const express = require('express')
const router = express.Router()
const {getPlayers, getPlayerByID, addPlayer, updatePlayer, deletePlayer} = require("../controllers/players.controller")

router.get('/', getPlayers)
router.get('/:_id', getPlayerByID)
router.post('/', addPlayer)
router.put('/:_id', updatePlayer)
router.delete('/:_id', deletePlayer)

module.exports = router