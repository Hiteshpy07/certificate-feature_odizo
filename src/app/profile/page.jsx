"use client"
import { useState,useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
function page() {
    let router=useRouter()
   let  [internprofile,setinternprofile]=useState([])
    const searchParams=useSearchParams()
    const paramid=searchParams.get('id')
    


    const fetchdetailsfromprofile=async()=>{
    const response=await axios.get("http://localhost:5069/interns")
    let data=response.data
    // console.log(data.length)
    let i=0
    for(i ;i<data.length;i++){
        if (data[i].id==paramid){
            setinternprofile(data[i])
            console.log(data[i], "ka profile set he done.....")
        }
    }
    // console.log(response.data)
  }

  useEffect(()=>{
    fetchdetailsfromprofile()

  },[])

 function handlecert(){
    router.push(`/profile/certificate?id=${encodeURIComponent(internprofile.id)}`)
 }


  return (
    <div className='flex-col'>
        <h1>{internprofile.name}</h1>
        <span>assignment1:{internprofile.assignment1}</span>
        <br/>
        <span>assignment2:{internprofile.assignment2}</span>
         <br/>
        <span>assignment3:{internprofile.assignment3}</span>
         <br/>
        <span>final project:{internprofile.final_project}</span>
        <br/>
        <button className='bg-green-400 rounded-xl p-2 hover:bg-green-600' onClick={handlecert}> Get Certificate</button>

    </div>
  )
}

export default page