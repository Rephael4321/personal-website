"use client";

import { useEffect } from "react";

export default function PDFPreviewModal({ isOpen, onClose, pdfUrl }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full md:w-[90%] md:h-[90%] md:max-w-4xl md:max-h-[90vh] bg-black rounded-lg shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="text-white font-display text-lg font-semibold">CV Preview</h3>
          <div className="flex items-center gap-4">
            <a
              href={pdfUrl}
              download
              className="px-4 py-2 rounded-[8px] text-black bg-[#32e6e2] font-text text-sm transition-colors duration-300 hover:bg-[#1A6AFF]"
            >
              Download
            </a>
            <button
              onClick={onClose}
              className="text-white hover:text-[#32e6e2] transition-colors duration-300 cursor-pointer"
              aria-label="Close preview"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full border-0"
            title="CV Preview"
          />
        </div>
      </div>
    </div>
  );
}

