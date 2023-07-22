// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/soljar', (req, res) => {
//   res.send('Hello saurabh')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const app = require("./app.js")

const PORT = 8000



app.listen(PORT,()=>{
    console.log("server: is FileListing at PORT 4000")
})