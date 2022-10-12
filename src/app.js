require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { createMovie, readMovies } = require("./movie/movieFunctions");

const app = async (yargsObject) => {
  try {
    if (yargsObject.create) {
      //C
      await createMovie({ title: yargsObject.title, actor: yargsObject.actor });
      console.log("Adding film to database...");
      console.log(await readMovies())
    } else if (yargsObject.read) {
      //R
      console.log(await readMovies(yargsObject.key, yargsObject.filter));
    } else if (yargsObject.update) {
      //U
    } else if (yargsObject.delete) {
      //D
    } else {
      console.log("Command Not Recognised.");
    }
    await mongoose.disconnect; // ???? why not work ????
    console.log("Press CTRL+C to disconnect");
  } catch (error) {
    await mongoose.disconnect; // ????
    console.log(error);
  }
};
app(yargs.argv);
