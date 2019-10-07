const { Schema, model } = require('mongoose');

const matSchema = new Schema({
    matname: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    user: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = model('Mat', matSchema);