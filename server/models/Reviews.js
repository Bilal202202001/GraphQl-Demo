const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const ReviewSchema = new Schema({
  rating: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
    required: true
  },
  
});


module.exports = model('Review', ReviewSchema);

