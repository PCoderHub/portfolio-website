const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const modelSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    shortMessage: {
        type: String,
        required: true
    }
}, {timestamps: true});

const contact = mongoose.model('contact', modelSchema);
module.exports = contact;