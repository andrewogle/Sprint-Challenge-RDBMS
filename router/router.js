const actionsRouter = require('./actionsRouter');
const projectsRouter = require('./projectsRouter');
const express = require('express');
const router = express.Router(); 

router.use('/', actionsRouter);
router.use('/', projectsRouter);

module.exports = router;