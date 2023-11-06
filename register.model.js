const mongoose=require("mongoose")
const RegisterSchema=mongoose.Schema({
    uname:String,
    uemail:String,
    upass:String,
    ucpass:String
})
module.exports=RegisterModel=mongoose.model("registration",RegisterSchema)
