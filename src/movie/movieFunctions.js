const Movie = require("./movieModel");

//individual export
exports.createMovie = async (movieObject) => {
  try {
    await Movie.create(movieObject);
  } catch (error) {
    console.log(error);
  }
};

exports.readMovies = async (key, filter) => {
  try {
    if (key) {
      return await Movie.findOne({ [key]: filter });
    } else {
      return await Movie.find({}); //Returns all objects instead
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (filter, updated) => {
  try {
    await Movie.updateOne(filter, {$set: updated});
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (title) => {
  try {
    await Movie.deleteOne({ title });
  } catch (error) {
    console.log(error);
  }
};
