"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  return (
    <footer>
      {/* Contact Opportunity Section with Dark Background */}
      <section className="px-[2.6rem] md:px-[7%] xl:px-[15%] py-[7rem] text-center">
        <h2 className="text-[2rem] md:text-[2.5rem] xl:text-[3rem] font-bold text-[#32e6e2] font-display mb-[2rem] tracking-wide">
          <div>Have a great opportunity for me?</div>
          <div className="text-white">Feel free to contact me</div>
        </h2>

        <div className="flex flex-row items-center justify-center gap-12 sm:gap-16 md:gap-20 mt-[3rem] mb-[3rem]">
          {/* Email icon */}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rephael4321@gmail.com&su=&body="
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-all duration-300 ease-in-out hover:-translate-y-2 hover:opacity-80"
          >
            <Image
              src="/email.svg"
              alt="email me"
              width={70}
              height={70}
              priority
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(76%) sepia(91%) saturate(2278%) hue-rotate(156deg) brightness(101%) contrast(101%)",
              }}
            />
          </Link>

          {/* Phone icon */}
          <Link
            href="tel:+972538234329"
            className="block transition-all duration-300 ease-in-out hover:-translate-y-2 hover:opacity-80"
          >
            <Image
              src="/phone.svg"
              alt="call me"
              width={70}
              height={70}
              priority
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(76%) sepia(91%) saturate(2278%) hue-rotate(156deg) brightness(101%) contrast(101%)",
              }}
            />
          </Link>

          {/* WhatsApp icon */}
          <Link
            href="https://wa.me/972538234329"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-all duration-300 ease-in-out hover:-translate-y-2 hover:opacity-80"
          >
            <Image
              src="/whatsapp.svg"
              alt="message me"
              width={70}
              height={70}
              priority
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(76%) sepia(91%) saturate(2278%) hue-rotate(156deg) brightness(101%) contrast(101%)",
              }}
            />
          </Link>
        </div>
      </section>

      {/* Footer Bottom Section with White Background */}
      <div className="bg-white text-black text-center py-6 px-4 space-y-4">
        {/* Email & Phone */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-sm">
          <button
            type="button"
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
      </div>
    </footer>
  );
}
