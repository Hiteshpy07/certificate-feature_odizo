"use client";

import { QRCodeSVG } from "qrcode.react";

export default function CertificateQR() {

  const value = "http://localhost:3000/profile/certficate/verify/${certId}";

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200">
      <QRCodeSVG
        value={value}
        size={100}          
        bgColor={"#ffffff"} 
        fgColor={"#000000"} 
        level={"L"}          
        includeMargin={false}
      />
      <p className="text-[10px] mt-2 font-mono text-gray-400">SCAN TO VERIFY</p>
    </div>
  );
}