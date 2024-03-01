const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    version: {
        type: String,
        required: true
    },
    platform: {
        type: [String],
        required: true
    }
});
const Game = mongoose.model('Game', GameSchema);

module.exports = Game;
// export default gameModel;
