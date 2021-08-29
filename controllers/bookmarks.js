const Bookmark = require("../models/Bookmarks");

// GET ALL TRANSACTIONS
// route => api/v1/bookmarks
exports.getBookmarks = async (req, res, next) => {
  try {
    const bookmarks = await Bookmark.find();

    return res.status(200).json({
      success: true,
      count: bookmarks.length,
      data: bookmarks,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.addBookmark = async (req, res, next) => {
    try {
        const {title, url, rating, desc} = req.body
        const bookmark = await Bookmark.create(req.body)

        return res.status(201).json({
            success: true,
            data: bookmark,
        })
        
    } catch (error) {
        if(error.name === 'ValidationError'){
            const messages = Object.values(error.errors).map(val => val.message)

            res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: "Server Error"
            })
        }
    }
}
