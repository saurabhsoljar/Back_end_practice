// const express = require('express')

// const conneceToDB = require("./config/db")

// const app = express();

// app.use = (express.json());
// app.use(express.urlencoded({extended:true}));

// conneceToDB();

// const userRoutes = require("./routes/userroutes");

// app.use("/", userRoutes);



// app.get("/",(req, res) =>{
//     res.send("<h1>Welcome to our custom server</h1>");
// });

// app.get("/youtub",(req, res) =>{
//     res.send("<h1>Welcome to our youtub channel</h1>");
// })

// // app.get("/instagram",(req, res) =>{
// //     res.send("<h1>Welcome to our instagram</h1>")
// // })

// app.get("/instagram",(req, res) =>{
//     res.json({
//         success:true,
//         message:"Welcome to our instagram"
//     });
// });

// module.exports=app;







const express = require('express');

const connectToDB = require("./config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();

const userRoutes = require("./routes/userroutes");

app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to our custom server</h1>");
});

app.get("/youtub", (req, res) => {
  res.send("<h1>Welcome to our youtube channel</h1>");
});

app.get("/instagram", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to our instagram"
  });
});

module.exports = app;
