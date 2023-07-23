require("dotenv").config()


const mongoose = require("mongoose")

const conneceToDB = async()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((conn)=>{
        console.log(`DB CONNECTED`);
    })
    .catch((err)=>{
        console.log(err)
    })
}



module.exports = conneceToDB