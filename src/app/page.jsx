import Button from "@/ui/button";
import Subtitle from "@/ui/subtitle";
import FunFact from "@/ui/fun-fact";
import ContactMe from "@/ui/contact-me";
import CustomParagraph from "@/ui/custom-paragraph";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="w-[100%] h-[10vh] bg-[#0000003b] fixed backdrop-blur-[4px] flex items-center">
        <Link href="/">
          <Image
            className="ms-[2rem] md:ms-[5rem] xl:ms-[10rem] hover:cursor-pointer"
            src="/R.svg"
            alt="home logo"
            width={50}
            height={50}
            priority
          ></Image>
        </Link>
      </nav>
      <div id="nav-spacer" className="w-[100%] h-[10vh]"></div>
      <section
        id="hero-section"
        className="flex flex-col md:flex-row md:px-[7%] xl:px-[25%] justify-between items-center md:h-[80vh] md:mb-[10vh]
      "
      >
        <div className="mt-[2rem] md:mt-[0]">
          <h2 className="text-[1.7rem] md:text-[2rem]">HI I'M A SOFTWARE</h2>
          <h1 className="text-[2rem] md:text-[3rem] font-semibold pb-[2.4rem] tracking-[5px]">
            DEVELOPER
          </h1>
          <div className="flex justify-around">
            <Button
              text="View My Work"
              href="/projects/neura-query"
              theme="dark"
            ></Button>
            <Button text="Contact Me" href="#contact-me" theme="light"></Button>
          </div>
        </div>
        <Image
          className="my-[4rem] md:my-[0]"
          style={{
            borderRadius: "50%",
          }}
          src="/selfie.png"
          alt="personal image"
          width={250}
          height={250}
          priority
        ></Image>
      </section>
      <section className="mx-[2.6rem] mb-[7rem] md:mx-[5rem] xl:mx-[20%]">
        <Subtitle subtitle="About Me"></Subtitle>
        <p className="text-[1.5rem] my-[1rem]">I'm Rephael Sintes</p>
        <p className="text-[1.2rem]">
          I'm a software developer with a passion for building efficient and
          scalable solutions. I enjoy writing clean, optimized code and
          developing high-performance applications that provide real value. With
          a strong focus on problem-solving and architecture, I strive to create
          software that is both powerful and user-friendly. My goal is to
          deliver top-quality work on time and within budget, ensuring the best
          results for every project.
        </p>
      </section>
      <section className="mx-[2.6rem] mb-[7rem] md:mx-[5rem] xl:mx-[20%]">
        <Subtitle subtitle="What I Do"></Subtitle>
        <div className="grid md:grid-cols-[1fr_1fr] border-[solid] border-[black] border-[1px] mt-[2rem] ps-[1rem] md:px-[3rem] xl:px-[7rem] pt-[2rem] pb-[1rem]">
          <CustomParagraph text="APIs"></CustomParagraph>
          <CustomParagraph text="CLIs"></CustomParagraph>
          <CustomParagraph text="SQL & NoSQL"></CustomParagraph>
          <CustomParagraph text="Software Architecture"></CustomParagraph>
          <CustomParagraph text="Backend Development"></CustomParagraph>
          <CustomParagraph text="Frontend Development"></CustomParagraph>
          <CustomParagraph text="Version Control"></CustomParagraph>
          <CustomParagraph text="Automation"></CustomParagraph>
        </div>
      </section>
      <section className="mx-[2.6rem] mb-[7rem] md:mx-[5rem] xl:mx-[20%]">
        <Subtitle subtitle="Skills"></Subtitle>
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-y-[20px] mt-[2rem] md:px-[7rem] pt-[2rem] pb-[1rem]">
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
      </section>
      <section className="mx-[2.6rem] mb-[7rem] md:mx-[5rem] xl:mx-[20%]">
        <Subtitle subtitle="Fun Facts"></Subtitle>
        <FunFact number="2,000+" text="Hours of Practice"></FunFact>
        <FunFact number="88,000+" text="Lines of Code"></FunFact>
        <FunFact number="1" text="Project"></FunFact>
        <FunFact number="180L" text="Coffee"></FunFact>
      </section>
      <section className="text-center mb-[7rem]">
        <h3 className="text-[2rem] md:text-[2.5rem]">
          Want to see what I can do?
        </h3>
        <p className="text-[16px] md:text-[24px] mb-[16px]">
          ↓ View my project ↓
        </p>
        <Button
          text="View My Work"
          href="/projects/neura-query"
          theme="dark"
        ></Button>
      </section>
      <ContactMe />
      <div className="w-[100%] h-[5px] bg-[black]"></div>
    </>
  );
}
