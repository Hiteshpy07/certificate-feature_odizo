// "use client"
// import { useState,useEffect } from 'react'
// import React from 'react'
// import axios from 'axios'
// import { useSearchParams } from 'next/navigation'
// import { useRouter } from 'next/navigation'
// function page() {
//     let router=useRouter()
//    let  [internprofile,setinternprofile]=useState([])
//     const searchParams=useSearchParams()
//     const paramid=searchParams.get('id')
    


//     const fetchdetailsfromprofile=async()=>{
//     const response=await axios.get("http://localhost:5069/interns")
//     let data=response.data
//     // console.log(data.length)
//     let i=0
//     for(i ;i<data.length;i++){
//         if (data[i].id==paramid){
//             setinternprofile(data[i])
//             console.log(data[i], "ka profile set he done.....")
//         }
//     }
//     // console.log(response.data)
//   }

//   useEffect(()=>{
//     fetchdetailsfromprofile()

//   },[])

//  function handlecert(){
//     router.push(`/profile/certificate?id=${encodeURIComponent(internprofile.id)}`)
//  }


//   return (
//     <div className='flex-col'>
//         <h1>{internprofile.name}</h1>
//         <span>assignment1:{internprofile.assignment1}</span>
//         <br/>
//         <span>assignment2:{internprofile.assignment2}</span>
//          <br/>
//         <span>assignment3:{internprofile.assignment3}</span>
//          <br/>
//         <span>final project:{internprofile.final_project}</span>
//         <br/>
//         <button className='bg-green-400 rounded-xl p-2 hover:bg-green-600' onClick={handlecert}> Get Certificate</button>

//     </div>
//   )
// }

// export default page

"use client"
import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import { useSearchParams, useRouter } from 'next/navigation'

function Page() {
    let router = useRouter()
    let [internprofile, setinternprofile] = useState(null)
    const searchParams = useSearchParams()
    const paramid = searchParams.get('id')

    const fetchdetailsfromprofile = async () => {
        try {
            const response = await axios.get("http://localhost:5069/interns")
            const userProfile = response.data.find(item => item.id == paramid)
            if (userProfile) setinternprofile(userProfile)
        } catch (error) {
            console.error("Error fetching profile:", error)
        }
    }

    useEffect(() => {
        if (paramid) fetchdetailsfromprofile()
    }, [paramid])

    if (!internprofile) return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
    )

    // Specific logic for Red/Green Text Status
    const renderStatus = (val) => {
        const isCompleted = val && val !== "0" && val !== "Pending" && val !== "";
        if (isCompleted) {
            return (
                <span className="text-[10px] font-black uppercase text-green-500 tracking-wider">
                    Completed ({val})
                </span>
            )
        }
        return (
            <span className="text-[10px] font-black uppercase text-red-600 tracking-wider">
                Not Completed
            </span>
        )
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6 font-sans">
            
            <div className="w-full max-w-sm p-8 bg-[#121212] border border-white/5 rounded-[2rem] shadow-2xl">
                
                {/* Header Section */}
                <div className="flex flex-col items-center mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center font-black text-2xl shadow-xl shadow-red-900/40 border border-white/10 mb-4">
                        {internprofile.name?.charAt(0)}
                    </div>
                    <h1 className="text-xl font-bold tracking-tight uppercase">{internprofile.name}</h1>
                    <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em] font-bold mt-1">Odizo Intern Profile</p>
                </div>

                {/* Status List */}
                <div className="space-y-2 mb-10">
                    {[
                        { label: 'Assignment 01', val: internprofile.assignment1 },
                        { label: 'Assignment 02', val: internprofile.assignment2 },
                        { label: 'Assignment 03', val: internprofile.assignment3 },
                        { label: 'Final Project', val: internprofile.final_project }
                    ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center py-3 border-b border-white/5">
                            <span className="text-xs text-gray-400 font-medium italic">
                                {item.label}
                            </span>
                            {renderStatus(item.val)}
                        </div>
                    ))}
                </div>

                {/* Action & ID Section */}
                <div className="flex flex-col items-center gap-6">
                    <button 
                        onClick={() => router.push(`/profile/certificate?id=${internprofile.id}`)}
                        className="w-full py-4 bg-red-600 hover:bg-red-700 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-red-900/20 transition-all active:scale-95"
                    >
                        Get Certificate
                    </button>
                    
                    <div className="flex flex-col items-center opacity-50">
                        <span className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter mb-1">Unique Verification ID</span>
                        <span className="text-[11px] font-mono text-red-500 font-bold tracking-widest">
                            CERT-ID: {paramid || "N/A"}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page