const express = require("express")
const app = express()
require('dotenv').config()
const postsRouter= require('./routes/posts.router')

app.use(express.json())

const PORT = 8080

app.use("/Home",postsRouter)

app.get('/',(req,res)=>{
    try{
        res.send("Hello from Node !")
    }
    catch{
        console.log(err)
    }
})

app.listen(PORT,()=>{

    console.log("server is running...")
})