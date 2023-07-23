const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"NAME is required"],
        trim:true

    },
    email:{
        type:String,
        require:[true,"Email is required"],
        unique:true
    }
})

module.exports = mongoose.model("user",userSchema)

//user=>USERS