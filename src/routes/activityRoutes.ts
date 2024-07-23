import activityController from '../controllers/activityController';

const express = require("express");
let router = express.Router();

router.post('/', activityController.createActivity);
router.get('/:projectId', activityController.getActivities);
router.put('/:id', activityController.updateActivity);
router.delete('/:id', activityController.deleteActivity);

module.exports = router;