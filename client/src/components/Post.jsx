import {useContext} from "react";
import { deletePost,likePost } from "../api/index";
import { MyContext } from "../context/Context";

const Post = ({ title, image, message, tags,likes,id }) => {
  const{currentId,setCurrentId,dispatch}=useContext(MyContext)
  return (
     <div className="bg-white rounded-lg overflow-hidden shadow-md relative">
       <img className="w-full h-48 object-cover" src={image} alt={title} />
     <div className="p-4">
         <h2 className="font-bold text-xl mb-2">{title}</h2>
         <p className="text-gray-700 text-base">{message}</p>
      </div>
      <div className="text-sm text-gray-600 mt-2">
        {tags?.map((tag) => {
          return (
            <span key={tag} className="mr-1">
              #{tag}
            </span>
          );
        })}
      </div>
      <div>
  <button
    className="absolute top-0 right-0 p-2"
    onClick={() => {
      console.log("id",id)
      setCurrentId(id)
      console.log(currentId)
    }
    }
  >
    ...
  </button>
</div>
      <div className="flex space-around p-4">
        <button  
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={()=>likePost(id,dispatch)}
        >
          Like {" "}
           {likes}
        </button>
        <button  
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
         onClick={()=>deletePost(id,dispatch)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;