const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const bookmarks = require('./routes/bookmarks')

const app = express()

dotenv.config({ path: "./config/config.env" })

connectDB();

app.use(express.json());
app.use('/api/v1/transactions', bookmarks);


if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
  app.use(express.static('client/build'))

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
