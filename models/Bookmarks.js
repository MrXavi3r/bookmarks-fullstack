const mongoose = require("mongoose");

const BookmarkSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a title"],
  },
  url: {
    type: String,
    required: [true, "Please add a valid url"],
  },
  rating: {
    type: Number,
    required: [true, "Please add a rating between 1 and 5"],
  },
  desc: {
    type: String,
    required: [true, "Please add a description"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Bookmark", BookmarkSchema);
