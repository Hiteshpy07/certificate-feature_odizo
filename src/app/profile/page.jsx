
"use client"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSearchParams, useRouter } from 'next/navigation'

export default function ProfilePage() {
  const router = useRouter()
  const [internprofile, setInternProfile] = useState(null)
  const searchParams = useSearchParams()
  const paramid = searchParams.get('id')

  const fetchdetailsfromprofile = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/interns")
      const userProfile = response.data.find(item => item._id == paramid)
      if (userProfile) setInternProfile(userProfile)
    } catch (error) {
      console.error("Error fetching profile:", error)
    }
  }

  useEffect(() => {
    if (paramid) fetchdetailsfromprofile()
  }, [paramid])

  if (!internprofile) return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )

  const tasks = [
    { label: 'Assignment 01', val: internprofile.assignment1 },
    { label: 'Assignment 02', val: internprofile.assignment2 },
    { label: 'Assignment 03', val: internprofile.assignment3 },
    { label: 'Final Project', val: internprofile.final_project },
  ]

  const completedCount = tasks.filter(
    t => t.val && t.val !== "0" && t.val !== "Pending" && t.val !== ""
  ).length

  const isCompleted = val =>
    val && val !== "0" && val !== "Pending" && val !== ""

  return (
    <div className="min-h-screen bg-stone-50 font-sans">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-16 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <a href="/" className="flex items-center gap-2.5 text-white font-black text-lg tracking-tight no-underline">
          <div className="w-8 h-8 bg-red-500 rounded-lg grid place-items-center text-white font-black text-sm">
            OD
          </div>
          Odizo
        </a>

        <ul className="flex gap-8 list-none">
          {["Home", "About us", "Portfolio", "Blogs & News"].map(item => (
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
        className="relative min-h-[380px] flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 70% 55% at 50% 65%, rgba(200,45,25,0.22) 0%, transparent 65%), #0a0a0a",
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

        {/* Avatar */}
        <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-900 flex items-center justify-center font-black text-2xl text-white shadow-2xl shadow-red-900/40 border border-white/10 mb-5">
          {internprofile.name?.charAt(0)}
        </div>

        <p className="relative z-10 text-xs tracking-[0.22em] uppercase font-medium text-red-400 mb-2">
          Odizo Intern Profile
        </p>
        <h1 className="relative z-10 text-5xl font-black text-white tracking-tighter leading-none mb-3">
          {internprofile.name}
        </h1>
        <p className="relative z-10 text-sm text-white/40 uppercase tracking-widest font-medium">
          {internprofile.role || "Intern"}
        </p>
      </section>

      {/* ── PROGRESS BAR ── */}
      <div className="sticky top-16 z-40 flex items-center justify-between px-14 py-4 bg-stone-50 border-b border-stone-200">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-stone-500 uppercase tracking-widest">Progress</span>
          <div className="w-48 h-1.5 bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 rounded-full transition-all duration-700"
              style={{ width: `${(completedCount / tasks.length) * 100}%` }}
            />
          </div>
        </div>
        <p className="text-sm text-stone-400">
          {completedCount} of {tasks.length} completed
        </p>
      </div>

      {/* ── TASK CARDS ── */}
      <section className="max-w-2xl mx-auto px-6 py-14 space-y-4 ">
        {tasks.map((item, idx) => {
          const done = isCompleted(item.val)
          return (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-2xl px-8 py-6 flex items-center justify-between transition-all hover:shadow-md hover:-translate-y-0.5 mb-2"
            >
              <div className="flex items-center gap-4">
                {/* Step indicator */}
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                  done
                    ? "bg-green-50 text-green-600 border border-green-200"
                    : "bg-red-50 text-red-400 border border-red-100"
                }`}>
                  {done ? "✓" : `0${idx + 1}`}
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-800">{item.label}</p>
                  {done && (
                    <p className="text-xs text-stone-400 mt-0.5">Submitted: {item.val}</p>
                  )}
                </div>
              </div>

              {done ? (
                <span className="text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
                  Completed
                </span>
              ) : (
                <span className="text-[10px] font-black uppercase tracking-widest text-red-500 bg-red-50 border border-red-100 px-3 py-1.5 rounded-full">
                  Pending
                </span>
              )}
            </div>
          )
        })}
      </section>

      {/* ── CERT SECTION ── */}
      <section className="max-w-2xl mx-auto px-6 pb-16">
        <div className="bg-white border border-stone-200 rounded-2xl px-8 py-8 flex flex-col items-center text-center gap-5">
          <p className="text-xs tracking-[0.2em] uppercase text-stone-400 font-semibold">Unique Verification ID</p>
          <p className="font-mono text-red-500 font-bold tracking-widest text-sm">
            CERT-ID: {paramid || "N/A"}
          </p>
          <button
            onClick={() => router.push(`/profile/certificate?id=${internprofile._id}`)}
            className="w-full py-4 bg-red-500 hover:bg-red-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded-xl transition-all active:scale-95 shadow-lg shadow-red-200"
          >
            Get Certificate
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div className="text-center py-12 border-t border-stone-200 text-sm text-stone-400">
        Back to home?{" "}
        <a href="/" className="text-red-500 hover:opacity-75 transition-opacity no-underline">
          Odizo
        </a>
      </div>

    </div>
  )
}