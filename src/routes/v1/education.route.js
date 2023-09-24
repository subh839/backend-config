const express = require('express');
const eduController = require('../../controllers/education.controller')

const router = express.Router();

router.post('/addEducation', eduController.addUserEducation);

module.exports = router;