import { nanoid } from "nanoid";
import { addUrl, getSmallToBig } from "../services/url-service.js";
import { login } from "./user-controller.js";

export const getBigUrl = async(request, response) => {
    const {code } = request.params;
    console.log('code:', code);
    try{
        const doc = await getSmallToBig(code);
        if(doc && doc._id){
            response.redirect(doc.bigurl);
        }
        else{
            response.json({message:'invalid small url'});
        }
    }
    catch(err){
        console.log('invalid small url: ',err);
        response.json({message:'Failed to redirect',err});
        
    }
}


export const urlShort = async(request,response) => {
    const bigUrl = request.body.bigurl;

    try{
        const num = nanoid(6);
        const doc = await addUrl({email:'test@gmail.com',shortid:num, bigurl:bigUrl});
        
        if(doc && doc._id){
            response.json({shortUrl : process.env.BASE_URL +'small/' + num});
        }
        else{
            response.json({error:'Failed to shorten URL'});
        }
    }
    catch(err){
        console.log('something went wrong in url shortener: ',err);
        response.json({error:'Failed to shorten URL',err});
        
    }
}