import { loginUser, registerUser } from "../services/user-service.js"


export const home = (request,response) => {
    response.send('<p>home page</p>')
}
export const login = async(request,response) => {
    const userInfo = request.body;
    try{
        const doc = await loginUser(userInfo);
        if(doc && doc._id){
            response.json({message:'user logged in',id: doc._id, email:doc.email});
        }
        else{
            response.json({message:'Invalid email id or password'});
        }
    }
    catch(err){
        response.json({message:'Something Went wrong during login',err:err});
        console.log('login failed ...',err);
    }
}
export const register = async (request,response) => {
    const userInfo = request.body;
    try{
        const doc = await registerUser(userInfo);
        response.json({message:'user registered',id: doc._id});
    }
    catch(err){
        response.json({message:'Something Went wrong during register',err:err});
        console.log('registration failed ...',err);
    }
}