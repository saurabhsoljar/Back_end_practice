const express = require('express')

const conneceToDB = require("./config/db")

const app = express()
conneceToDB()

app.get("/",(req, res) =>{
    res.send("<h1>Welcome to our custom server</h1>")
})

app.get("/youtub",(req, res) =>{
    res.send("<h1>Welcome to our youtub channel</h1>")
})

// app.get("/instagram",(req, res) =>{
//     res.send("<h1>Welcome to our instagram</h1>")
// })

app.get("/instagram",(req, res) =>{
    res.json({
        success:true,
        message:"Welcome to our instagram"
    })
})

module.exports=app