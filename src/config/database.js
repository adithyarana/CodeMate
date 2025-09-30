const mongoose = require("mongoose");

const connectdb = async () => {
    try {

        const connect = await mongoose.connect(
            // url 
        )

    } catch (error) {
        console.log("database cannot be connected !");

    }
}

module.exports = connectdb;