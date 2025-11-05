"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PDFPreviewModal from "./pdf-preview-modal";

export default function Navbar() {
  const [isPDFPreviewOpen, setIsPDFPreviewOpen] = useState(false);
  const pdfUrl = "/cv/CV-Rephael-Sintes-Fullstack-Developer.pdf";

  return (
    <>
      <nav className="w-full h-[10vh] text-white bg-[#0000003b] fixed backdrop-blur-[4px] flex items-center justify-between z-100 px-[2.6rem] md:px-[7%] xl:px-[15%]">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <h2 className="text-lg font-bold font-display">Rephael Sintes</h2>
        </Link>
        
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-2xl font-text text-white font-semibold">CV</span>
          
          <div className="flex items-center gap-2 p-2 rounded-lg">
            {/* PDF CV Preview & Download */}
            <button
              onClick={() => setIsPDFPreviewOpen(true)}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
              aria-label="Preview CV as PDF"
              title="Preview CV (PDF)"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#32e6e2]"
              >
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 2V8H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 13H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 17H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 9H9H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="hidden sm:inline text-sm font-text">PDF</span>
            </button>

            {/* DOCX CV Download */}
            <a
              href="/cv/CV-Rephael-Sintes-Fullstack-Developer.docx"
              download
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
              aria-label="Download CV as DOCX"
              title="Download CV (DOCX)"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#32e6e2]"
              >
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 2V8H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 15H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="hidden sm:inline text-sm font-text">DOCX</span>
            </a>
          </div>
        </div>
      </nav>
      <div id="nav-spacer" className="w-full h-[10vh]"></div>
      
      {/* PDF Preview Modal */}
      <PDFPreviewModal
        isOpen={isPDFPreviewOpen}
        onClose={() => setIsPDFPreviewOpen(false)}
        pdfUrl={pdfUrl}
      />
    </>
  );
}
