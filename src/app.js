require("./db/connection");
const mongoose = require("mongoose")
const yargs = require("yargs")

const app = async (yargsObject) => {
    try {
        if (yargsObject.create) {
            //C
        } else if (yargsObject.read) {
            //R
        } else if (yargsObject.update) {
            //U
        } else if (yargsObject.delete) {
            //D
        } else {
            console.log("Command Not Recognised.")
        }
        await mongoose.disconnect
    } catch (error) {
        await mongoose.disconnect
        console.log(error)
    }
}
app(yargs.argv)