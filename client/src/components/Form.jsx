import {useState,useContext,useEffect} from "react";
import { addPost,updatePost } from "../api";
import { MyContext } from "../context/Context";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const { dispatch,currentId,setCurrentId,state } = useContext(MyContext);
    const post=currentId ? state.posts.find((p)=>p._id===currentId) :null
    console.log("post here",post)
    useEffect(()=>{
    if(post){
      setPostData(post)
    }
    },[post])
  const getImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPostData({ ...postData, selectedFile: reader.result.toString() });
    };
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId){
      updatePost(currentId,postData,dispatch)
    }else{
      addPost(postData, dispatch);

    }
    clear()
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.value = "";
    }
  };
  
  return (
    <form className="flex flex-col gap-4 w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4">{currentId ? `Editing a Memory` : 'Creating a Memory'}</h1>
      <input
        className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="creator"
        value={postData.creator}
        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        placeholder="Creator"
      />
      <input
        className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="title"
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        placeholder="Title"
      />
      <input
        className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="message"
        value={postData.message}
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        placeholder="Message"
      />
      <input
        className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="tags"
        value={postData.tags}
        onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })}
        placeholder="Tags"
      />
      <div>
        <input
          // className="hidden"
          id="file-input"
          type="file"
          onChange={(e) => {
            getImage(e.target.files[0]);
          }}
        />
        {/* <label className="px-4 py-2 border border-gray-400 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100" htmlFor="file-input">
          {postData.selectedFile ? 'File Uploaded' : 'Upload File'}
        </label> */}
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Submit
      </button>
    </form>
  );
};




export default Form;