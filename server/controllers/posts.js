import PostMessage from "../models/postMessageSchema.js"
export const getPosts=async (req,res)=>{
   try{
    const postMessages= await PostMessage.find()
    res.status(200).json({success:true, data:postMessages})
   }catch(err){
    res.status(404).json({success:false, message:err.message})
   }
}

export const createPost= async (req,res)=>{
    try{
         const post=new PostMessage(req.body)
         await post.save()
         res.status(201).json({success:true, data:post})


    }catch(err){
        res.status(409).json({success:false, message:err.message})

    }

}
export const updatePost=async(req,res)=>{
    const {id:_id}=req.params;
    const post=req.body;
    try{
        const updatedPost= await PostMessage.findByIdAndUpdate(_id,post,{new:true})
        res.json({success:true, data:updatedPost})
    }catch(err){
        res.status(404).json({success:false, message:err.message})
    }
}
export const deletePost=async (req,res)=>{
    const {id}=req.params;
   
    try{
        const deletedPost= await PostMessage.findByIdAndRemove(id)
        
        res.json({success:true, data:deletedPost})
    }catch(err){
        res.status(404).json({success:false, message:err.message})
    }
}
export const likePost=async (req,res)=>{
    const {id}=req.params;
    try{
         const post= await PostMessage.findById(id);
         const likedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1},{new:true})
         res.json({success:true, data:likedPost})
    }catch(err){
res.status(404).json({success:false, message:err.message})
    }
    
}