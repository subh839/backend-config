const httpStatus = require('http-status');
const { Education } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUserEducation = async (userBody) => {
    //   if (await User.isEmailTaken(userBody.email)) {
    //     throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    //   }
    return Education.create(userBody);
};


module.exports = {
    createUserEducation
};
