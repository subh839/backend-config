const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { roleService } = require('../services');


const addUserRole = catchAsync(async (req, res) => {
    const user = await educationService.createUserRole(req.body)
    res.status(httpStatus.CREATED).send(user);
});

module.exports = {
    addUserRole
};