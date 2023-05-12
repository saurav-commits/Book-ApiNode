const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: String,
  author: { type: String, required: true },
  pages: Number,
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Book', bookSchema);
