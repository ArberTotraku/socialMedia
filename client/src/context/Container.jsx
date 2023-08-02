import {MyContext} from "./Context"
import Reducer from "../reducers/Reducer.js"
import {useEffect,useReducer,useState} from "react"
import * as api from "../api/index.js"

const initialState={posts:[],user:null} 
const Container=(props)=>{
   
const [state, dispatch]=useReducer(Reducer,initialState)
const [currentId,setCurrentId]=useState(null)
useEffect(()=>{
// axios.get("/posts").then(res=>{
//     if(){
   // {type:"FETCH_ALL", payload:res.data.data}
    api.getPosts(dispatch)
// })
},[])
return (
    <MyContext.Provider value={{state,dispatch,currentId,setCurrentId}}>
        {props.children}
    </MyContext.Provider>
)
}
export default Container