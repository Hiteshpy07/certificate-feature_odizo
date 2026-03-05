import React from 'react';

const CertificateBox = ({ name, email, certId, assignments, isCompleted }) => {
  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-xl p-8 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-slate-900 ml-[35%] mt-[3%]">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold uppercase tracking-tight">Certification</h2>
        <p className="text-xs text-slate-500 font-mono">CERT ID: {certId}</p>
      </div>

      {/* User Info */}
      <div className="space-y-1 mb-6">
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm text-slate-600 italic">{email}</p>
      </div>

      {/* Assignment Progress */}
      <div className="border-t border-slate-100 pt-4 mb-6">
        <p className="text-sm font-bold mb-3 uppercase tracking-wider">Course Progress</p>
        <div className="grid grid-cols-4 gap-2">
          {assignments.map((status, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-[10px] text-slate-400 mb-1">A-{index + 1}</span>
              <div className={`h-2 w-full rounded-full ${status ? 'bg-green-500' : 'bg-slate-200'}`} />
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xs font-medium">Status:</span>
          <span className={`text-xs font-bold px-2 py-0.5 rounded border ${isCompleted ? 'bg-green-50 border-green-200 text-green-700' : 'bg-amber-50 border-amber-200 text-amber-700'}`}>
            {isCompleted ? 'COMPLETED' : 'IN PROGRESS'}
          </span>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-slate-50 p-4 rounded-lg border border-dashed border-slate-300">
        <p className="text-sm leading-relaxed text-slate-700">
          Thank you for your incredible contribution at <strong>Odizo</strong>. 
          We truly appreciate your dedication and the impact you’ve made on our ecosystem.
        </p>
      </div>
    </div>
  );
};

export default CertificateBox;