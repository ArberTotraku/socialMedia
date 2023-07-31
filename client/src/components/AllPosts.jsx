import { useContext } from 'react'
import { MyContext } from '../context/Context'
import Post from "./Post"
const AllPosts = () => {
  const { state } = useContext(MyContext)
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {state.posts?.map((post) => (
        
        <Post 
          key={post._id}
          title={post.title}
          image={post.selectedFile}
          message={post.message}
          tags={post.tags}
          likes={post.likeCount}
          id={post._id}
         
        />
      ))}
    </div>
  )
}

export default AllPosts