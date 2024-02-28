const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    title: {
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
