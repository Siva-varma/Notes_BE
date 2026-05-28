import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const registerService =async (userData) => {

    //check if user already exists
    let existingUser =await userModel.findOne({email: userData.email});

    if(existingUser){
        throw new apiError(400, "User already exists");
    }
    
    //hash the password
    let hashPassword = bcrypt.hashSync(userData.password, 10);

    //create new user and save the user to database
    let newUser= await userModel.create({
        name: userData.name,
        email: userData.email,
        password: hashPassword
    });

    // create JWT token for the user
    let token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "1d"});

    return {user: newUser, token};
}