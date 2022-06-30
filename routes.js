const express = require('express')
const router = express.Router()
const path =require("path")

router.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname,"./public/index.html"))

})

router.get("/signup",(req,res)=>{

    res.sendFile(path.join(__dirname,"./public/signup.html"))

})

router.get("/dashboard",(req,res)=>{

    res.sendFile(path.join(__dirname,"./public/dashboard.html"))

})


module.exports=router