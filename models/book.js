const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gbsSchema = new Schema({
  title: {type: String, required: true},
  authors: {type: Array, default: []},
  description: String,
  image: String,
  link: String
});

const Book = mongoose.model("Book", gbsSchema);

module.exports = Book;