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
    email: {type : String , unique: true},
    password: String,
    token: String
    
});

module.exports = model('Author', AuthorSchema);

