// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/soljar', (req, res) => {
//   res.send('Hello saurabh')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const express = require('express')

const app = express()

app.get("/",(req, res) =>{
    res.send("<h1>Welcome to our custom server</h1>")
})

app.listen(4000,()=>{
    console.log("server: is FileListing at PORT 4000")
})