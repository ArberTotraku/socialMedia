import React from 'react'
import AllPosts from './AllPosts'
import Form from './Form'
function Home() {
  return (
    <div  className="flex flex-col-reverse md:flex-row gap-4 mx-6">
            <AllPosts/>
            <Form/>
            </div>
  )
}

export default Home