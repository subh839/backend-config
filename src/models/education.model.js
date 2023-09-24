const mongoose = require('mongoose');

const educationSchema = mongoose.Schema(
    {
        degree: {
            type: String,
            required: true,
            trim: true,
        },
        course: {
            type: String,
            required: true,
            trim: true,
        },
        startYear: {
            type: String,
            required: true,
        },
        endYear: {
            type: String,
            required: true,
        },
        university: {
            type: String,
            required: true,
        },
        universityCountry: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

/**
 * @typedef User
 */
const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
