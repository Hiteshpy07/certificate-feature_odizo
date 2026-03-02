// "use client"
// import React, { useState,useEffect } from 'react'
// import { useRouter } from 'next/navigation';
// import axios from 'axios';
// function Auth() {
//   let router=useRouter()
//   let [username,setusername]=useState()
//   let [password,setpassword]=useState()
//   let [intern,setintern]=useState([])


//   function handlesub(){
//     // router.push("/profile")
//     console.log(intern)
//     console.log(username)
//     console.log(password)

//     const logintern=intern.find((user)=>user.name===username)
//     console.log(logintern.id)
//     router.push(`/profile?id=${encodeURIComponent(logintern.id)}`)

//   }


//   function handleusername(e){
//     e.preventDefault()
//     let value=e.target.value
//     setusername(value)

//   }
//   function handlepassword(e){
//     e.preventDefault()
//     let value=e.target.value
//     setpassword(value)
    
//   }

//   const fetchdetails=async()=>{
//     const response=await axios.get("http://localhost:5069/interns")
//     setintern(response.data)
//     // console.log(response.data)
//   }

//   useEffect(()=>{
//     fetchdetails()

//   },[])


//   return (
//     <>
//     <h1>Login</h1>
//     <div className='flex flex-col'>
//     <input placeholder='username' onChange={handleusername}/>
//     <input placeholder='password' onChange={handlepassword}/>
//     <button onClick={handlesub}>Submit</button>
//     </div>
//     </>
//   )
// }

// export default Auth





"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';

function Auth() {
  let router = useRouter()
  let [username, setusername] = useState('')
  let [password, setpassword] = useState('')
  let [intern, setintern] = useState([])

  function handlesub() {
    console.log(intern)
    let logintern = intern.find((user) => user.name === username && user.password===password)
    console.log(logintern.id)
    if (logintern) {
      router.push(`/profile?id=${encodeURIComponent(logintern.id)}`)
    } else {
      alert("User not found")
    }
  }

  function handleusername(e) {
    setusername(e.target.value)
  }

  function handlepassword(e) {
    setpassword(e.target.value)
  }

  const fetchdetails = async () => {
    try {
      const response = await axios.get("http://localhost:5069/interns")
      setintern(response.data)
    } catch (error) {
      console.error("Error fetching interns:", error)
    }
  }

  useEffect(() => {
    fetchdetails()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white font-sans">
      {/* Background Gradient Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-red-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-red-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-8 bg-[#121212] border border-white/10 rounded-2xl shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
            Odizo Auth
          </h1>
          <p className="text-gray-400 mt-2">Enter your credentials to access the portal</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300 ml-1">Username</label>
            <input 
              placeholder="Enter your username" 
              onChange={handleusername}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder:text-gray-600"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
            <input 
              type="password"
              placeholder="••••••••" 
              onChange={handlepassword}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder:text-gray-600"
            />
          </div>

          <button 
            onClick={handlesub}
            className="mt-4 w-full py-3 px-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg shadow-red-900/20 transform transition-all active:scale-[0.98]"
          >
            Sign In
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Powered by <span className="text-red-500/80">Odizo Intern Systems</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth