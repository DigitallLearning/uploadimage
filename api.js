const express=require("express")
const app=express()
const multer=require("multer")
const path=require("path")
const fs=require("fs")
const cors=require("cors")
app.use(express.json())
require("./mongoose")
app.use(cors())
app.use(express.static("public"))
const ImageModel=require("./image.model")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null,"public/uploads/" );
    },
    filename: (req, file, cb) => {
      cb(null,file.originalname);
    }
  });
  const upload = multer({ storage: storage }).single("pimage");
 app.post("/",(req,resp)=>
 {
   // resp.send("upload")
    upload(req,resp,(err)=>{
        if(err)
        {
          console.log(err)
        }
        else{
            const newImage=new ImageModel({
                pid:req.body.pid,
                pname:req.body.pname,
                pdesc:req.body.pdesc,
                pprice:req.body.pprice,
                pimage:"https://uploadimage-t8wr.onrender.com/uploads/"+req.file.filename
            })
             newImage.save()
             resp.send("File Uploaded")
        }
    })
 })
 app.get("/",async (req,resp)=>
{
    const data=await ImageModel.find()
     resp.send(data)
 })
 app.listen(4000)