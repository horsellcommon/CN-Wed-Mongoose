const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, //Without a title, no dice
    unique: true, //No duplicates, OR ELSE
  },
  actor: {
    type: String,
    default: "Not Specified",
  },
});

//.model grabs schema and applies to new "Movie" collection - DB was named in .env after / and before ?
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
