const express = require("express");
const router = express.Router();
const {
  getBookmarks,
  addBookmark,
  deleteBookmark,
  updateBookmark,
} = require("../controllers/bookmarks");

// methods on routes can be chained together
router.route("/").get(getBookmarks).post(addBookmark)

// router.route("/:id").put(updateBookmark).delete(deleteBookmark);

module.exports = router;
