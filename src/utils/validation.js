const validator = require("validator")

const ValidateSignup = (req)=>{

    const {firstName , lastName , email , password , }= req.body

    if(!firstName || lastName) return new Error("first name is requried")

     if(!validator.isEmail(email)){
        throw new Error("email is required !")
     }

     if(!validator.isStrongPassword(password)){
        throw new Error("plz enter the srong password !!")
     }
}
module.exports = {
    ValidateSignup
}