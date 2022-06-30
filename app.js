const express = require('express')
const path = require('path')
const router=require("./routes")



const app = express()
const port = 3000

app.use("/",router)
// app.get("/signup",(req,res)=>{
//     res.json(req+"Yeah tum new page me aagae")
// })
app.use(express.static(path.join(__dirname,"public")))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})