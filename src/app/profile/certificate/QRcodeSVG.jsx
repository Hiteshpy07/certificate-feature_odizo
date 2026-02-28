"use client";

import { QRCodeSVG } from "qrcode.react";

export default function CertificateQR() {
  // This is the link the QR code will open when scanned
  // For now, we point it to your local verify route
  const value = "http://localhost:3000/verify/intern-123";

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200">
      <QRCodeSVG
        value={value}
        size={100}          // Height and width in pixels
        bgColor={"#ffffff"} // Background color
        fgColor={"#000000"} // Color of the QR patterns
        level={"L"}          // Error correction level (L, M, Q, H)
        includeMargin={false}
      />
      <p className="text-[10px] mt-2 font-mono text-gray-400">SCAN TO VERIFY</p>
    </div>
  );
}