import { urlModel } from "../model/url-schema.js";


export const getSmallToBig = async(code) => {
   const doc = await urlModel.findOne({ shortid : code }).exec();
    return doc;
}

export const addUrl = async (urlObject) => {
    try{
        const doc = await urlModel.create(urlObject);
        return doc;
    }
    catch(err){
        console.log('error while registering user', err);
        throw err;
    }
}