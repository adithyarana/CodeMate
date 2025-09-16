const mongoose = require("mongoose");

const conntdb = async () => {
    try {

        const connect = await mongoose.connect(
            // url 
        )

        if (connect) {
            console.log("Database is connected !")
        }

    } catch (error) {
        console.log("database cannot be connected !");

    }
}

module.export = conntdb();