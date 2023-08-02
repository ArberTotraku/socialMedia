import {Schema, model } from "mongoose"
const postMessageSchema= new Schema({
    title: String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{type:Number,
    default:0}
},{timestamps:true})

const PostMessage=new model("postMessage",postMessageSchema)
export default PostMessage