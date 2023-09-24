const httpStatus = require('http-status');
const { Role } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUserRole= async (userBody) => {
    //   if (await User.isEmailTaken(userBody.email)) {
    //     throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    //   }
    return Role.create(userBody);
};


module.exports = {
    createUserRole
};
