const mongoose = require("mongoose");
const { number } = require("yargs");

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
  director: {
    type: String,
    default: "Not Specified",
  },
  genre: {
    type: String,
    default: "Not Specified",
  },
  released: {
    type: Number,
    default: "Not specified",
  },
});

//.model grabs schema and applies to new "Movie" collection - DB was named in .env after / and before ?
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

/*
Everything in Mongoose starts with a Schema.
Organisation or structure for a collection inside a database.
Essentially, it is a library that allows you to pass docs to a DBMS.
Mongoose is an Object Document Mapping, defining the structure of your documents and the types of data-
-you're storing.
*/
