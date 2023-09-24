const express = require('express');
const roleController = require('../../controllers/role.controller')

const router = express.Router();

router.post('/addRole', roleController.addUserRole);

module.exports = router;