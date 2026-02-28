"use client"
import React, { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
function Auth() {
  let router=useRouter()
  let [username,setusername]=useState()
  let [password,setpassword]=useState()
  let [intern,setintern]=useState([])


  function handlesub(){
    // router.push("/profile")
    console.log(intern)
    console.log(username)
    console.log(password)

    const logintern=intern.find((user)=>user.name===username)
    console.log(logintern.id)
    router.push(`/profile?id=${encodeURIComponent(logintern.id)}`)

  }


  function handleusername(e){
    e.preventDefault()
    let value=e.target.value
    setusername(value)

  }
  function handlepassword(e){
    e.preventDefault()
    let value=e.target.value
    setpassword(value)
    
  }

  const fetchdetails=async()=>{
    const response=await axios.get("http://localhost:5069/interns")
    setintern(response.data)
    // console.log(response.data)
  }

  useEffect(()=>{
    fetchdetails()

  },[])


  return (
    <>
    <h1>Login</h1>
    <div className='flex flex-col'>
    <input placeholder='username' onChange={handleusername}/>
    <input placeholder='password' onChange={handlepassword}/>
    <button onClick={handlesub}>Submit</button>
    </div>
    </>
  )
}

export default Auth