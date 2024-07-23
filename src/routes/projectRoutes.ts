import projectController from '../controllers/projectController';

const express = require("express");
let router = express.Router();

router.post('/', projectController.createProject);
router.get('/', projectController.getProjects);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;