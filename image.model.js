const mongoose=require("mongoose")
const ImageSchema=mongoose.Schema({
    name:String,
    image:String
})
module.exports=ImageModel=mongoose.model("students",ImageSchema)
