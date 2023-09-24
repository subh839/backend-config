const mongoose = require('mongoose');

const roleSchema = mongoose.Schema(
    {
        roleName: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
);

/**
 * @typedef User
 */
const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
