require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const {
  createMovie,
  readMovies,
  updateMovie,
  deleteMovie,
} = require("./movie/movieFunctions");

const app = async (yargsObject) => {
  try {
    if (yargsObject.create) {
      //C
      await createMovie({
        title: yargsObject.title,
        actor: yargsObject.actor,
        director: yargsObject.director,
        genre: yargsObject.genre,
        released: yargsObject.released,
      });
      console.log("Adding film to database...");
      console.log(await readMovies());
    } else if (yargsObject.read) {
      //R
      console.log(await readMovies(yargsObject.key, yargsObject.filter));
    } else if (yargsObject.update) {
      //U
      console.log(await updateMovie(
        {[yargsObject.filterKey]: yargsObject.filterValue},
        {[yargsObject.updateKey]: yargsObject.updateValue}
      ));
    } else if (yargsObject.delete) {
      //D
      console.log(await deleteMovie(yargsObject.title));
      console.log(await readMovies());
    } else {
      console.log("Command Not Recognised.");
    }
    await mongoose.disconnect();
  } catch (error) {
    await mongoose.disconnect();
    console.log(error);
  }
};
app(yargs.argv);
