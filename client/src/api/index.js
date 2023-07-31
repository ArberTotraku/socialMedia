import axios from "axios"
 const url="http://localhost:5000/posts"
 export const fetchPosts= ()=>axios.get(url)
 export const createPost=(newPost)=> axios.post(url, newPost)
 export const editPost=(id,updatedPost)=> axios.patch(`${url}/${id}`,updatedPost)
 export const removePost=(id)=>axios.delete(`${url}/${id}`)
 export const addLike=(id)=>axios.patch(`${url}/${id}/likePost`)
//crud

 export const getPosts= async (dispatch)=>{
    try{
        const res= await fetchPosts()
        console.log(res)
       dispatch ({type:"FETCH_ALL", payload:res.data.data})
    
    }catch(err){
        console.log(err.message)
    }
}


export const addPost=async (post,dispatch)=>{
    try {
        const res= await createPost(post)
        dispatch({type:"CREATE", payload:res.data.data})
    } catch (err) {
        console.log(err.message)
    }
}

export const updatePost=async (id,post,dispatch)=>{
    try{
        const res= await editPost(id, post)
          dispatch({type:"UPDATE", payload:res.data.data})
    }catch(err){
        console.log(err.message)
    }
}

export const deletePost =async(id, dispatch)=>{
    try{
        await removePost(id)
        dispatch({type:"DELETE", payload:id})
    }catch(err){
        console.log(err)
    }
}

export const likePost= async(id,dispatch)=>{
    try{
        const res= await addLike(id)
        dispatch({type:"LIKE", payload:res.data.data})
 
    }catch(err){
        console.log(err)
    }
}