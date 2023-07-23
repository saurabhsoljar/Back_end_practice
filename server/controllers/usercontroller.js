const user = require("../models/usermodel")


exports.createUser=async(req, res)=>{
    try {
        const{name,email}=req.body
        if(name||email){
            throw new error("name and email are required")
        }

        const userExists = await user.findOne({email})
        
        if(userExists){
            throw new error("email already exists")
        }

        const user = await user.create({
            name,
            email
        })

        res.json({
            Success: true,
            message:"user created Sucessfully",
            user
        })


    } catch (error) {
        console.log(error);
        res.json({
            Success: false,
            message:"erroe.massage"
        })
    }
}