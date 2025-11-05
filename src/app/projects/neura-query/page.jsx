"use client";

import TechnologyImage from "@/ui/technology-image";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <section
        id="hero-section"
        className="flex flex-col items-center px-4 sm:px-[2.6rem] md:px-[7%] xl:px-[15%] md:mb-[5vh] gap-10 mt-[8vh]"
      >
        <div className="mt-8 md:mt-0 text-center">
          <h1 className="text-[2rem] md:text-[3rem] font-semibold pb-4 tracking-[5px] font-display">
            Neura Query
          </h1>
        </div>

        <iframe
          className="w-full max-w-[500px] aspect-video"
          src="https://www.youtube.com/embed/ehktzytwQpw"
          allowFullScreen
        />
      </section>

      {/* About */}
      <section className="px-[2.6rem] md:px-[7%] xl:px-[15%] mb-[7rem]">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-[#32e6e2] font-display mb-[2rem]">
          About
        </h2>
        <div className="flex flex-col md:flex-row w-full md:w-[85%] xl:w-[70%]">
          <div className="w-[1px] bg-[#f0f0f0] mb-6 md:mb-0 md:me-[3rem]" />
          <div className="flex flex-col gap-[1rem]">
            <p className="text-[1.4rem] text-[#f0f0f0] font-text leading-relaxed">
              AI powered platform for effortless access and interaction with
              online SQL databases
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-[2.6rem] md:px-[7%] xl:px-[15%] mb-[7rem]">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-[#32e6e2] font-display mb-[2rem]">
          Features
        </h2>
        <div className="flex flex-col md:flex-row w-full md:w-[85%] xl:w-[70%]">
          <div className="w-[1px] bg-[#f0f0f0] mb-6 md:mb-0 md:me-[3rem]" />
          <div className="flex flex-col gap-[0.8rem] font-text text-[1.4rem] text-[#f0f0f0]">
            <p className="flex items-start">
              <span className="text-[#32e6e2] mr-2">&gt;</span>
              <span>1500+ Lines of code</span>
            </p>
            <p className="flex items-start">
              <span className="text-[#32e6e2] mr-2">&gt;</span>
              <span>Frontend & Backend</span>
            </p>
            <p className="flex items-start">
              <span className="text-[#32e6e2] mr-2">&gt;</span>
              <span>12 Technologies</span>
            </p>
          </div>
        </div>
      </section>

      {/* Find it on GitHub */}
      <section className="px-[2.6rem] md:px-[7%] xl:px-[15%] mb-[7rem]">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-[#32e6e2] font-display mb-[2rem]">
          Find it on GitHub
        </h2>
        <div className="flex flex-col md:flex-row w-full md:w-[85%] xl:w-[70%]">
          <div className="w-[1px] bg-[#f0f0f0] mb-6 md:mb-0 md:me-[3rem]" />
          <div className="flex flex-col gap-[1rem]">
            <div>
              <p className="text-[1.4rem] mb-2 text-[#f0f0f0] font-text">
                Client Side:
              </p>
              <Link
                href="https://github.com/Rephael4321/neura-query"
                target="_blank"
                rel="noopener noreferrer"
                className="underline break-words"
              >
                <p className="text-[1.4rem] text-[#f0f0f0] font-text">
                  https://github.com/Rephael4321/neura-query
                </p>
              </Link>
            </div>

            <div>
              <p className="text-[1.4rem] mb-2 text-[#f0f0f0] font-text">
                Server Side:
              </p>
              <Link
                href="https://github.com/Rephael4321/neura-query-api"
                target="_blank"
                rel="noopener noreferrer"
                className="underline break-words"
              >
                <p className="text-[1.4rem] text-[#f0f0f0] font-text">
                  https://github.com/Rephael4321/neura-query-api
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Try it yourself */}
      <section className="flex flex-col md:flex-row px-4 sm:px-[2.6rem] md:px-[7%] lg:px-[12%] xl:px-[15%] justify-center md:justify-start gap-10 md:mb-[20vh]">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-[#32e6e2] font-display mb-[2rem]">
            Try it yourself
          </h2>
          <Link
            href="https://neuraquery.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mt-2 mb-6"
          >
            <p className="text-[1.3rem] text-center md:text-left">
              https://neuraquery.io/
            </p>
          </Link>
          <Link
            href="https://neuraquery.io/"
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
      </section>
    </>
  );
}
