import React from 'react'
import memories from "../images/twopeople.jpeg"
import {Link} from "react-router-dom"
const user=null;
const Navbar = () => {
 
    return (
        <nav className="bg-white shadow-lg">
          <div className="container mx-auto flex justify-between items-center py-4">
            <Link to="/">
              <h1 className="text-2xl font-bold">Memories</h1>
            </Link>
            <img className="h-16" src={memories} alt="icon" />
            {user? (
              <div className="flex items-center">
                <h2 className="mr-4">{user?.result.name}</h2>
                <img
                  className="rounded-full h-8 w-8"
                  src={user?.result.imageUrl}
                  alt={user?.result.name}
                />
                <button
                  className="ml-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                  
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/auth">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </nav>
      );
}

export default Navbar