"use client"
import { useEffect,useState } from "react";
import axios from "axios";

import { use} from "react";
// import { useParams } from "next/navigation";
import CertificateBox from "./CertificateBox";


export default function CareersPage({params}) {

 const { certId } = use(params)

 let [verifyProfile,setverifyProfile]=useState()



  const fetchdetailsfromprofile = async () => {
        try {
            const response = await axios.get("http://localhost:5069/interns")
            let userProfile = response.data.find(item => item.id === certId)
            setverifyProfile(userProfile)
            
            
        } catch (error) {
            console.error("Error fetching profile:", error)
        }
    }

    useEffect(() => {
            if (certId) fetchdetailsfromprofile()
        }, [])

        console.log(verifyProfile)
        let {name}=verifyProfile.name
        console.log(name)
 
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-16 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <a href="#" className="flex items-center gap-2.5 text-white font-black text-lg tracking-tight no-underline">
          <div className="w-8 h-8 bg-red-500 rounded-lg grid place-items-center text-white font-black text-base">
            OD
          </div>
          Odizo
        </a>

        <ul className="flex gap-8 list-none">
          {["Home", "About us", "Portfolio", "Blogs & News"].map((item) => (
            <li key={item}>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors no-underline">
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="text-white text-sm border-b-2 border-red-500 pb-0.5 no-underline">
              Careers
            </a>
          </li>
        </ul>

        <button className="border border-white/30 text-white text-sm px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all">
          Contact Us
        </button>
      </nav>

      {/* ── HERO ── */}
      <section
        className="relative min-h-[350px] flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 bg-neutral-950 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 65%, rgba(200,45,25,0.22) 0%, transparent 65%), #0a0a0a",
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <p className="relative z-10 text-xs tracking-[0.22em] uppercase font-medium text-red-400 mb-5">
          Certifications
        </p>
        <h1 className="relative z-10 text-7xl font-black text-white tracking-tighter leading-none mb-6">
          Odizo
        </h1>
        <p className="relative z-10 max-w-lg text-base leading-relaxed text-amber-50 mb-5">
          Highlighting verified skills and industry-standard milestones with proven results. If you value excellence and dedication, you will find it here.
        </p>
        {/* <button className="relative z-10 bg-red-500 hover:bg-red-600 text-white px-9 py-3.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5">
          
        </button> */}
      </section>

      {/* ── FILTER BAR ── */}
      {/* <div className="sticky top-16 z-40 flex items-center justify-between px-14 py-5 bg-stone-50 border-b border-stone-200">
        <div className="flex gap-2.5">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`text-sm px-5 py-2 rounded-full border transition-all ${
                activeFilter === f.key
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-transparent text-stone-600 border-stone-300 hover:border-red-400 hover:text-red-500"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <p className="text-sm text-stone-400">
          {filtered.length} role{filtered.length !== 1 ? "s" : ""} open
        </p>
      </div> */}



{/* ///////// */}


<CertificateBox 
  name="svdsd"
  email="wfewe" 
  certId={certId}
  assignments={[true, true, true, false]} // 1, 2, 3 completed, 4 pending
  isCompleted={false}
/>

     

      {/* ── FOOTER NOTE ── */}
      <div className="text-center py-12 border-t border-stone-200 text-sm text-stone-400">
        Back to home?
        <a href="/" className="text-red-500 hover:opacity-75 transition-opacity no-underline">
          Odizo
        </a>
      </div>
    </div>
  );
}