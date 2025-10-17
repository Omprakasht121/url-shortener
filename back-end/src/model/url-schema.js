//url-model
import mongoose, {Schema} from "mongoose";
const urlSchema = new Schema({
    'email' : {type:String},
    'shortid' : {type:String, required:true},
    'bigurl' : {type:String}
})
export const urlModel = mongoose.model('urls',urlSchema);