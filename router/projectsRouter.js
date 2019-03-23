const express = require("express");
const db = require("../data/helpers/projectsDB");
const router = express.Router();

router.get('/api/projects', async (req, res) => {
    try {
        const projects = await db.getProjects()
        res.status(200).json(projects)
    } catch(error) {
        res.status(500).json(error)
    }
})

router.post('/api/projects', async (req, res) => {
    try {
        const project = await db.addProjects(req.body)
        res.status(201).json(project)
    } catch(error) {
        res.status(500).json(error)
    }
})



module.exports = router;