
import { UserModel } from "../model/user-schema.js";

//register user

export const registerUser = async (userObject) => {
    try{
        const doc = await UserModel.create(userObject);
        return doc;
    }
    catch(err){
        console.log('error while registering user', err);
        throw err;
    }
}
export const loginUser = async(userObject) => {
    try{
        const doc = await UserModel.findOne({email : userObject.email, password : userObject.password}).exec();
        return doc;
    }
    catch(err){
        console.log('error while logging in user', err);
        throw err;
    }
}