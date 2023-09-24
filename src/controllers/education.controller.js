const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { educationService } = require('../services');


const addUserEducation = catchAsync(async (req, res) => {
    const user = await educationService.createUserEducation(req.body)
    res.status(httpStatus.CREATED).send(user);
});

module.exports = {
    addUserEducation
};