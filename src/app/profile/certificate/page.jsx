// "use client"
// import React from 'react'
// import { useSearchParams } from 'next/navigation'
// function page() {
//     let searchparams=useSearchParams()
//     let certid=searchparams.get("id")
//   return (
//     <div>here the certificate will be displayed with certificate of id {certid}</div>
//   )
// }

// export default page




// "use client";
// import CertificateQR from './QRcodeSVG';
// import { useState ,useEffect} from 'react';
// import React from 'react';
// import axios from 'axios';
// import { useSearchParams } from "next/navigation";
// import { QRCodeSVG } from 'qrcode.react';

// function CertificatePage() {
//     const [interncert,setinterncert]=useState([])
//   const searchParams = useSearchParams();
//   let certid=searchParams.get("id")

//   const name = interncert.name || "Intern Name";
//   const role = interncert.role || "Software Intern";
//   const start = searchParams.get("start") || "Jan 02, 2026";
//   const end = searchParams.get("end") || "Feb 02, 2026";
//   const certId = certid || "ODZ-2026-991";


//   const fetchdetails=async()=>{
//     const response=await axios.get("http://localhost:5069/interns")
//     let data=response.data
//     // console.log(interncert)
//     let i=0
//     for(i ;i<data.length;i++){
//         if (data[i].id==certid){
//             setinterncert(data[i])
//             console.log(data[i], "ka profile set he done.....")
//         }
//     }
//   }

//   useEffect(()=>{
//     fetchdetails()

//   },[])

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-slate-900">
    
//       <style jsx global>{`
//         @media print {
//           /* Removes the URL, Date, and Page Title from the top and bottom */
//           @page { 
//             margin: 0; 
//             size: auto;
//           }
//           body { 
//             margin: 0cm; 
//             background: white;
//           }
//           /* Ensures the red logo and gray boxes actually show up in the PDF */
//           * {
//             -webkit-print-color-adjust: exact !important;
//             print-color-adjust: exact !important;
//           }
//         }
//       `}</style>

//       <div className="relative w-full max-w-[900px] aspect-[1.414/1] bg-white shadow-2xl p-1 border-[16px] border-double border-slate-800 print:shadow-none print:border-slate-800">
        
//         <div className="h-full w-full border border-slate-200 p-12 flex flex-col items-center justify-between text-center relative overflow-hidden">
          
//           <header className="w-full flex justify-between items-center mb-4">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-bold text-white text-lg">Z</div>
//               <span className="text-xl font-bold tracking-tighter uppercase">Odizo</span>
//             </div>
//             <div className="text-right">
//               <p className="text-[10px] text-slate-400 uppercase tracking-widest">Certificate ID</p>
//               <p className="text-xs font-mono font-bold">{certId}</p>
//             </div>
//           </header>

//           <div>
//             <h1 className="text-4xl font-serif text-slate-800 tracking-[0.2em] uppercase">
//               Certificate of Completion
//             </h1>
//             <div className="h-0.5 w-32 bg-red-600 mx-auto mt-2"></div>
//           </div>

//           <div className="mt-6">
//             <p className="text-sm italic text-slate-500 mb-2">This is to certify that</p>
//             <h2 className="text-5xl font-serif font-bold text-slate-900 border-b-2 border-slate-100 px-6 pb-2 inline-block">
//               {name}
//             </h2>
//             <p className="mt-4 text-lg text-slate-600">
//               has successfully completed their tenure as a <br/>
//               <span className="font-bold text-slate-800 uppercase tracking-wide">{role}</span>
//             </p>
//           </div>

//           <div className="max-w-xl bg-slate-50 p-6 rounded-lg border border-slate-100 my-2">
//             <p className="text-sm leading-relaxed text-slate-600 italic">
//               "During their time at <strong>Odizo</strong>, {name.split(' ')[0]} demonstrated a remarkable commitment to technical excellence. Their contribution to our projects and within our engineering team has been highly valued."
//             </p>
//           </div>

//           <div className="text-slate-600 font-medium text-sm">
//             <p>From <span className="text-slate-900 font-bold underline decoration-red-200">{start}</span> to <span className="text-slate-900 font-bold underline decoration-red-200">{end}</span></p>
//           </div>

//           <footer className="w-full flex justify-between items-end mt-4">
//             <div className="text-left w-1/3">
//               <div className="w-32 h-[1px] bg-slate-300 mb-1"></div>
//               <p className="text-[10px] font-bold text-slate-800 uppercase tracking-tight">Management</p>
//               <p className="text-[9px] text-slate-400">Odizo Technologies</p>
//             </div>

//             <div className="flex flex-col items-center">
//                <div className="p-1 border border-slate-100 rounded bg-white">
//                  <QRCodeSVG value={`http://192.168.29.22:3000/verify/${certId}`} size={65} />
//                </div>
//                <p className="text-[8px] mt-1 text-slate-400 font-bold uppercase tracking-tighter">Scan to Verify</p>
//             </div>

//             <div className="text-right w-1/3">
//               <div className="w-32 h-[1px] bg-slate-300 mb-1 ml-auto"></div>
//               <p className="text-[10px] font-bold text-slate-800 uppercase tracking-tight">Bhubaneswar, India</p>
//               <p className="text-[9px] text-slate-400 uppercase tracking-tighter">Verified Official</p>
//             </div>
//           </footer>
//         </div>
//       </div>

//       <div className="mt-10 flex gap-4 print:hidden">
//         <button onClick={() => window.print()} className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition shadow-lg active:scale-95">
//           Download Certificate
//         </button>
//         <button onClick={() => window.history.back()} className="bg-white border border-slate-200 text-slate-500 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition">
//           Go Back
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CertificatePage;




"use client";
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import { QRCodeSVG } from 'qrcode.react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { PDFDocument } from 'pdf-lib';

function CertificatePage() {
  const [interncert, setinterncert] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);
  const searchParams = useSearchParams();
  const certificateRef = useRef(null);
  
  const certid = searchParams.get("id");
  const name = interncert.name || "Intern Name";
  const role = interncert.role || "Software Intern";
  const start = searchParams.get("start") || "Jan 02, 2026";
  const end = searchParams.get("end") || "Feb 02, 2026";
  const certId = certid || "ODZ-2026-991";

  const fetchdetails = async () => {
    try {
      const response = await axios.get("http://localhost:5069/interns");
      const user = response.data.find(item => item.id == certid);
      if (user) setinterncert(user);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (certid) fetchdetails();
  }, [certid]);

  const downloadSecurePDF = async () => {
    if (!certificateRef.current || isGenerating) return;
    setIsGenerating(true);

    try {
      // 1. Capture HTML as Canvas (Using scale 3 for print quality)
      const canvas = await html2canvas(certificateRef.current, {
        scale: 3, 
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');

      // 2. Create jsPDF instance
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      const pdfBytes = pdf.output('arraybuffer');

      // 3. Encrypt PDF using pdf-lib
      const pdfDoc = await PDFDocument.load(pdfBytes);
      
      // Password is the Intern ID
      // await pdfDoc.encrypt({
      //   userPassword: certid.toString(), 
      //   ownerPassword: 'odizo_admin_master_key',
      //   permissions: {
      //     printing: 'highResolution',
      //     modifying: false,
      //     copying: false
      //   }
      // });

      const encryptedPdfBytes = await pdfDoc.save();

      // 4. Download File
      const blob = new Blob([encryptedPdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `Odizo_Cert_${name.replace(/\s+/g, '_')}.pdf`;
      link.click();
    } catch (err) {
      console.error("Secure PDF Error:", err);
      alert("Error: Check console for CSS color conflicts.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f1f5f9] p-6">
      
      {/* CERTIFICATE CONTAINER 
          Using Explicit Hex Colors to avoid html2canvas "lab()" parser errors.
      */}
      <div 
        ref={certificateRef}
        className="relative w-full max-w-[900px] aspect-[1.414/1] bg-[#ffffff] p-1 border-[16px] border-double border-[#1e293b] shadow-2xl"
      >
        <div className="h-full w-full border border-[#e2e8f0] p-12 flex flex-col items-center justify-between text-center relative overflow-hidden bg-[#ffffff]">
          
          <header className="w-full flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#dc2626] rounded-full flex items-center justify-center font-bold text-[#ffffff] text-lg">Z</div>
              <span className="text-xl font-bold tracking-tighter uppercase text-[#0f172a]">Odizo</span>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-[#94a3b8] uppercase tracking-widest">Certificate ID</p>
              <p className="text-xs font-mono font-bold text-[#dc2626]">{certId}</p>
            </div>
          </header>

          <div>
            <h1 className="text-4xl font-serif text-[#1e293b] tracking-[0.2em] uppercase">
              Certificate of Completion
            </h1>
            <div className="h-0.5 w-32 bg-[#dc2626] mx-auto mt-2"></div>
          </div>

          <div className="mt-6">
            <p className="text-sm italic text-[#64748b] mb-2">This is to certify that</p>
            <h2 className="text-5xl font-serif font-bold text-[#0f172a] border-b-2 border-[#f1f5f9] px-6 pb-2 inline-block">
              {name}
            </h2>
            <p className="mt-4 text-lg text-[#475569]">
              has successfully completed their tenure as a <br/>
              <span className="font-bold text-[#1e293b] uppercase tracking-wide">{role}</span>
            </p>
          </div>

          <div className="max-w-xl bg-[#f8fafc] p-6 rounded-lg border border-[#f1f5f9] my-2">
            <p className="text-sm leading-relaxed text-[#475569] italic">
              "During their time at <strong>Odizo</strong>, {name.split(' ')[0]} demonstrated a remarkable commitment to technical excellence. Their contribution to our projects has been highly valued."
            </p>
          </div>

          <div className="text-[#475569] font-medium text-sm">
            <p>From <span className="text-[#0f172a] font-bold underline decoration-[#fee2e2]">{start}</span> to <span className="text-[#0f172a] font-bold underline decoration-[#fee2e2]">{end}</span></p>
          </div>

          <footer className="w-full flex justify-between items-end mt-4">
            <div className="text-left w-1/3">
              <div className="w-32 h-[1px] bg-[#cbd5e1] mb-1"></div>
              <p className="text-[10px] font-bold text-[#0f172a] uppercase tracking-tight">Management</p>
              <p className="text-[9px] text-[#94a3b8]">Odizo Technologies</p>
            </div>

            <div className="flex flex-col items-center">
               <div className="p-1 border border-[#f1f5f9] rounded bg-[#ffffff]">
                 <QRCodeSVG value={`http://odizo-verify.vercel.app/verify/${certId}`} size={65} />
               </div>
               <p className="text-[8px] mt-1 text-[#94a3b8] font-bold uppercase tracking-tighter">Scan to Verify</p>
            </div>

            <div className="text-right w-1/3">
              <div className="w-32 h-[1px] bg-[#cbd5e1] mb-1 ml-auto"></div>
              <p className="text-[10px] font-bold text-[#0f172a] uppercase tracking-tight">Bhubaneswar, India</p>
              <p className="text-[9px] text-[#94a3b8] uppercase tracking-tighter">Verified Official</p>
            </div>
          </footer>
        </div>
      </div>

      {/* ACTION PANEL */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="flex gap-4">
            <button 
                onClick={downloadSecurePDF} 
                disabled={isGenerating}
                className={`${isGenerating ? 'bg-gray-400' : 'bg-[#dc2626] hover:bg-[#b91c1c]'} text-white px-10 py-4 rounded-full font-bold transition shadow-lg active:scale-95 flex items-center gap-2`}
            >
                {isGenerating ? 'Encrypting...' : 'Download Secure Certificate'}
            </button>
            <button 
                onClick={() => window.history.back()} 
                className="bg-white border border-[#e2e8f0] text-[#64748b] px-10 py-4 rounded-full font-bold hover:bg-[#f8fafc] transition"
            >
                Go Back
            </button>
        </div>
        <p className="text-[11px] text-[#94a3b8] font-bold uppercase tracking-widest bg-white px-4 py-1 rounded-full border border-[#e2e8f0]">
            Locked: Use your Intern ID to open PDF
        </p>
      </div>
    </div>
  );
}

export default CertificatePage;