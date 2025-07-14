"use client";

import TechnologyImage from "@/ui/technology-image";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <section
        id="hero-section"
        className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-[2.6rem] md:px-[7%] xl:px-[15%] md:h-[80vh] md:mb-[10vh] gap-10"
      >
        <div className="mt-8 md:mt-0">
          <h1 className="text-[2rem] md:text-[3rem] font-semibold pb-10 text-center md:text-left tracking-[5px] font-display">
            Neura Query
          </h1>

          <div className="md:flex items-start">
            <h2 className="flex-[6] text-[1.3rem] md:text-[1.7rem] md:pe-6 mb-8 md:mb-0 text-center md:text-left mx-4 md:mx-0 leading-snug">
              AI-powered platform for effortless access and interaction with SQL
              databases
            </h2>

            <div className="flex flex-col font-bold text-[1.3rem] md:text-[1.7rem] ps-6 text-center md:text-left">
              <p>1500+ Lines of code</p>
              <p className="my-4">Frontend & Backend</p>
              <p>12 Technologies</p>
            </div>
          </div>
        </div>
      </section>

      <iframe
        className="w-full max-w-[500px] aspect-video mx-auto mb-24 md:mb-[20vh]"
        src="https://www.youtube.com/embed/ehktzytwQpw"
        allowFullScreen
      />

      <section className="flex flex-col md:flex-row px-4 sm:px-[2.6rem] md:px-[7%] lg:px-[12%] xl:px-[15%] justify-between gap-10 md:mb-[20vh]">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-[1.5rem] sm:text-[1.7rem]">Try it yourself</h2>
          <Link
            href="https://neuraquery.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mt-2 mb-6"
          >
            <p className="text-[1rem] text-center md:text-left">
              https://neuraquery.io
            </p>
          </Link>
          <Link
            href="https://neuraquery.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-[90vw] max-w-[350px] h-[45vw] max-h-[159px] md:w-[200px] md:h-[91px] xl:w-[300px] xl:h-[136px]">
              <Image
                className="object-fill"
                src="/neura-query.png"
                alt="Neura Query website"
                fill
                priority
              />
            </div>
          </Link>
        </div>

        <div className="md:ps-0">
          <h2 className="text-[1.5rem] sm:text-[1.7rem] text-center md:text-left">
            Find it on GitHub
          </h2>
          <div className="text-center md:text-left mt-6">
            <p className="text-[1rem] mb-1">Client Side:</p>
            <Link
              href="https://github.com/Rephael4321/neura-query"
              target="_blank"
              rel="noopener noreferrer"
              className="underline break-words"
            >
              <p className="text-[1rem]">
                https://github.com/Rephael4321/neura-query
              </p>
            </Link>

            <p className="text-[1rem] mt-4 mb-1">Server Side:</p>
            <Link
              href="https://github.com/Rephael4321/neura-query-api"
              target="_blank"
              rel="noopener noreferrer"
              className="underline break-words"
            >
              <p className="text-[1rem]">
                https://github.com/Rephael4321/neura-query-api
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
