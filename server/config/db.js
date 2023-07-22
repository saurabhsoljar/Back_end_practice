const mongoose = require("mongoose")

const conneceToDB = async()=>{
    mongoose.connect("")
    .then((conn)=>{
        console.log(`DB CONNECTED`);
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = conneceToDB