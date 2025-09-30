const express = require("express")
const connectdb = require("./config/database")
const User = require("./models/user")
const   {ValidateSignup}= require("./utils/validation")
const bcrypt = require("bcrypt")

const port = 4000;

const app = express();
app.use(express.json());

// post api 

app.post("/signup",async(req, res)=>{
  try {
  ValidateSignup(req)

  // encripy passowrd 
  const {firstName , lastName , email , password}= req.body;
  const hanhpassword = await bcrypt.hash(password, 10);

  const user = new User({
    firstName,
    lastName, 
    email,
    password:hanhpassword

  });



    await user.save();
    res.status(200).json({message:"user saved !"})
    
  } catch (error) {
    res.status(500).json({message:"something went wrong"})
  }
})

// get api
app.get("/getuser",async(req , res)=>{

  
})


connectdb()
  .then(()=>{
    console.log("connected to db !")
      app.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })
  })
  .catch((err)=>{
    console.error("DB is not connected !", err)
  })
