"use client";

import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  return (
    <footer className="bg-white text-black text-center py-6 px-4 space-y-4">
      {/* Email & Phone */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-sm">
        <button
          onClick={() => copyToClipboard("rephael4321@gmail.com", "Email")}
          className="hover:underline cursor-pointer"
        >
          rephael4321@gmail.com
        </button>
        <span className="hidden sm:inline">|</span>
        <a
          href="tel:+972538234329"
          onClick={() => copyToClipboard("+972538234329", "Phone")}
          className="hover:underline cursor-pointer"
        >
          +972-53-823-4329
        </a>
      </div>

      {/* Copy Message */}
      <div className="h-5 text-xs text-green-600">
        {copied && `✓ ${copied} copied`}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 items-center">
        <a
          href="https://www.linkedin.com/in/rephael-sintes-833177196/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/social-links/linkedin.png"
            alt="LinkedIn"
            className="w-8 h-8 rounded-full hover:opacity-80"
          />
        </a>
        <a
          href="https://github.com/rephael4321"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/social-links/github.png"
            alt="GitHub"
            className="w-8 h-8 hover:opacity-80"
          />
        </a>
      </div>

      {/* Footer Text */}
      <div className="text-xs text-gray-600 tracking-wider">
        © 2025 by Rephael Sintes | rephael4321
      </div>
    </footer>
  );
}
