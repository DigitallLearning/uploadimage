const mongoose=require("mongoose")
const ImageSchema=mongoose.Schema({
    pid:Number,
    pname:String,
    pdesc:String,
    pprice:Number,
    pimage:String
})
module.exports=ImageModel=mongoose.model("products",ImageSchema)
