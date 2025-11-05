import TechnologiesCarousel from "@/components/technologies-carousel";
import RotatingText from "@/components/rotating-text";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        id="hero-section"
        className="flex flex-col md:flex-row px-[2.6rem] md:px-[7%] xl:px-[15%] justify-between items-center md:h-[80vh] md:mb-[10vh]"
      >
        <div className="mt-[2rem] md:mt-0 text-center md:text-left">
          <h1
            className="text-[2rem] md:text-[3rem] font-semibold pb-[2.4rem] md:w-[70%] mx-auto md:mx-0"
            style={{
              fontFamily: "var(--font-orbitron), sans-serif",
            }}
          >
            Hi, I'm <br /> <RotatingText />
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center md:justify-start">
            <Link href="#contact-me">
              <button className="px-10 py-4 rounded-[8px] text-black bg-white font-text transition-colors ease-in-out duration-500 hover:bg-[#1A6AFF]">
                Contact Me
              </button>
            </Link>
            <Link href="/projects">
              <button className="px-10 py-4 rounded-[8px] text-black bg-[#32e6e2] font-text transition-colors duration-500 ease-in-out hover:bg-[#1A6AFF]">
                View my work
              </button>
            </Link>
          </div>
        </div>

        <Image
          className="my-[4rem] md:my-0"
          style={{ borderRadius: "50%" }}
          src="/selfie.png"
          alt="personal image"
          width={300}
          height={300}
          priority
        />
      </section>

      {/* About Me */}
      <section className="px-[2.6rem] md:px-[7%] xl:px-[15%] mb-[7rem]">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-[#32e6e2] font-display mb-[2rem]">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row w-full md:w-[85%] xl:w-[70%]">
          <div className="w-[1px] bg-[#f0f0f0] mb-6 md:mb-0 md:me-[3rem]" />
          <div className="flex flex-col gap-[1rem]">
            <p className="text-[1.1rem] text-[#f0f0f0] font-text leading-relaxed">
              I began writing code at 17, driven by curiosity and a love for
              solving problems through logic. By 23, I completed a cyber course
              that sharpened my analytical and security mindset, followed by a
              web development course at 26 that deepened my understanding of
              modern application design. At 28, I graduated from a software
              development and cloud technologies program, completing a
              comprehensive final project that tied everything together—from
              backend systems to cloud deployment. Soon after, I built a full
              online store for a client, turning ideas into a working product.
              I’m now looking to join a dynamic and growing environment that
              will challenge me to reach my full potential. My passion lies in
              building clean, efficient, and scalable architectures that solve
              real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="px-[2.6rem] md:px-[7%] xl:px-[15%] mb-[7rem]">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-[#32e6e2] font-display mb-[2rem]">
          What I Do
        </h2>
        <div className="flex flex-col md:flex-row w-full md:w-[85%] xl:w-[70%]">
          <div className="w-[1px] bg-[#f0f0f0] mb-6 md:mb-0 md:me-[3rem]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[2rem] gap-y-[0.6rem] mt-[0.5rem] font-text text-[1.1rem] text-[#f0f0f0]">
            <p>&gt; APIs</p>
            <p>&gt; CLIs</p>
            <p>&gt; SQL &amp; NoSQL</p>
            <p>&gt; Software Architecture</p>
            <p>&gt; Backend Development</p>
            <p>&gt; Frontend Development</p>
            <p>&gt; Version Control</p>
            <p>&gt; Automation</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-[2.6rem] md:px-[7%] xl:px-[15%] mb-[7rem]">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-[#32e6e2] font-display mb-[2rem]">
          Skills
        </h2>
        <div className="flex flex-col md:flex-row w-full md:w-[85%] xl:w-[70%]">
          <div className="w-[1px] bg-[#f0f0f0] mb-6 md:mb-0 md:me-[3rem]" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-[2rem] gap-y-[0.6rem] font-text text-[1.1rem] text-[#f0f0f0]">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>NextJS</p>
            <p>Tailwind</p>
            <p>Python</p>
            <p>SQL</p>
            <p>NoSQL</p>
            <p>GIT</p>
            <p>Linux</p>
            <p>AWS</p>
            <p>Kafka</p>
            <p>Docker</p>
            <p>FastAPI</p>
            <p>Kubernetes</p>
            <p>Swagger</p>
          </div>
        </div>
      </section>

      {/* View Project */}
      <section className="px-[2.6rem] md:px-[7%] xl:px-[15%] mb-[7rem]">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-[#32e6e2] font-display mb-[2rem]">
          View my projects
        </h2>
        <div className="flex flex-col md:flex-row w-full md:w-[85%] xl:w-[70%]">
          <div className="w-[1px] bg-[#f0f0f0] mb-6 md:mb-0 md:me-[3rem]" />
          <div className="flex flex-col gap-[1rem]">
            <p className="text-[1.1rem] font-text leading-relaxed">
              Neura Query - AI powered platform for effortless access and
              interaction with online SQL databases
            </p>
            <Link href="/projects/neura-query">
              <button className="px-10 py-4 rounded-[8px] text-black bg-[#32e6e2] font-text transition-colors duration-500 ease-in-out hover:bg-[#1A6AFF]">
                View my work
              </button>
            </Link>
            <p className="text-[1.1rem] font-text leading-relaxed">
              Hamefanek - An online store for selling ice creams including
              content management system (CMS) for handling products and orders
            </p>
            <Link href="/projects/hamefanek">
              <button className="px-10 py-4 rounded-[8px] text-black bg-[#32e6e2] font-text transition-colors duration-500 ease-in-out hover:bg-[#1A6AFF]">
                View my work
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="px-[2.6rem] md:px-[7%] xl:px-[15%] mb-[7rem]">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-[#32e6e2] font-display mb-[2rem]">
          Fun Facts
        </h2>
        <div className="flex flex-col md:flex-row w-full md:w-[85%] xl:w-[70%] text-[#f0f0f0]">
          <div className="w-[1px] bg-[#f0f0f0] mb-6 md:mb-0 md:me-[3rem]" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-8">
            <div className="flex flex-col gap-y-2">
              <span className="text-[1.5rem] font-bold">2,000+</span>
              <span>Hours of Practice</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[1.5rem] font-bold">88,000+</span>
              <span>Lines of Code</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[1.5rem] font-bold">2</span>
              <span>Projects</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[1.5rem] font-bold">1800L</span>
              <span>Coffee</span>
            </div>
          </div>
        </div>
      </section>

      <TechnologiesCarousel />
    </>
  );
}
