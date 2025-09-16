const express = require("express")
require("./config/database")

const port =4000;

const app = express();


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})