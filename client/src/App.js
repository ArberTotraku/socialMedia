import "./style/App.scss"
import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Auth from "./components/Auth"
const App=()=>{
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth" element={<Auth/>}/>
        </Routes>
      

        </BrowserRouter>
    )
}
export default App