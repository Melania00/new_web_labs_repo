import React, {useState, useEffect} from 'react'
import Axios from "axios";

import Home from './features/home/Home'

const App = () =>{
  const [data,setData]=useState("");

  const getData=async()=>{
    const response=await Axios.get("http://localhost:5000/getData")
    setData(response.data);
  }

  useEffect(()=>{
    getData()
  },[]);

  return (
    <>
      <div>{data}</div>
      <Home />
    </>
  )
}

export default App;
