const express = require("express");
const db = require("../data/helpers/actionsDB");
const router = express.Router();

router.get('/api/actions', async (req, res) => {
    try {
        const actions = await db.getActions()
        res.status(200).json(actions)
    } catch(error) {
        res.status(500).json(error)
    }
})

router.post('/api/actions', async (req, res) => {
    try {
        const action = await db.addActions(req.body)
        res.status(201).json(action)
    } catch(error) {
        res.status(500).json(error)
    }
})

module.exports = router;