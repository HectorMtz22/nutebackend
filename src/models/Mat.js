const { Schema, model } = require('mongoose');

const matSchema = new Schema({
    matname: {
        type: String,
        required: false,
        trim: false,
        unique: false,
        index: {unique: false}
    },
    user: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = model('Mat', matSchema);