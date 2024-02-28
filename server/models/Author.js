const { Schema, model } = require("mongoose");

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    
});

module.exports = model('Author', AuthorSchema);

