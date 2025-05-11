import Navbar from "@/ui/navbar";
import TechnologyImage from "@/ui/technology-image";
import ContactMe from "@/ui/contact-me";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Navbar />
      <section
        id="hero-section"
        className="flex flex-row justify-between items-center md:px-[7%] xl:px-[25%] md:h-[80vh] md:mb-[10vh]"
      >
        <div className="mt-[2rem] md:mt-[0]">
          <h1 className="text-[2rem] text-center md:text-start md:text-[3rem] font-semibold pb-[2.4rem] tracking-[5px]">
            Neura Query
          </h1>
          <div className="md:flex">
            <h2 className="flex-[6] text-[1.7rem] md:text-[1.7rem] md:pe-[1.5rem] mx-[4rem] md:mx-[0] mb-[2rem] md:mb-[0]">
              AI-powered platform for effortless access and interaction with SQL
              databases
            </h2>
            <div className="flex-col font-bold text-[1.7rem] ps-[4rem] mb-[12rem] md:mb-[0]">
              <p>1500+ Lines of code</p>
              <p className="my-[1.5rem]">Frontend & Backend</p>
              <p>12 Technologies</p>
            </div>
          </div>
        </div>
      </section>
      <iframe
        className="w-[400px] h-[220px] mx-[auto] mb-[6rem] md:mb-[20vh]"
        src="https://www.youtube.com/embed/ehktzytwQpw"
        allowFullScreen
      />
      <section className="md:flex md:flex-row md:px-[7%] lg:px-[12%] xl:px-[15%] md:justify-between md:mb-[20vh]">
        <div className="flex flex-col items-center mb-[6rem] md:mb-[0]">
          <h2 className="text-[1.7rem]">Try it yourself</h2>
          <Link
            href="https://neuraquery.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            <p className="text-[1rem] mt-[6px] mb-[24px]">
              https://neuraquery.io
            </p>
          </Link>
          <Link
            href="https://neuraquery.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-[350px] h-[159px] md:w-[200px] md:h-[91px] xl:w-[300px] xl:h-[136px]">
              <Image
                className="object-fill"
                src="/neura-query.png"
                alt="Neura Query website"
                fill
                priority
              ></Image>
            </div>
          </Link>
        </div>
        <div className="ps-[10%] sm:ps-[20%] md:ps-[0]">
          <h2 className="text-[1.7rem]">Find it on GitHub</h2>
          <p className="text-[1rem] mt-[24px] md:mt-[64px]">Client Side:</p>
          <Link
            href="https://github.com/Rephael4321/neura-query"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            <p className="text-[1rem]">
              https://github.com/Rephael4321/neura-query
            </p>
          </Link>
          <p className="text-[1rem] mt-[12px]">Server Side:</p>
          <Link
            href="https://github.com/Rephael4321/neura-query-api"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            <p className="text-[1rem]">
              https://github.com/Rephael4321/neura-query-api
            </p>
          </Link>
        </div>
      </section>
      <section className="mb-[6rem] md:mb-[20vh]">
        <h2 className="text-[1.7rem] text-center mt-[3rem] md:mt-[8rem] mb-[2rem]">
          Technologies
        </h2>
        <div className="bg-[white]">
          <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center items-center lg:gap-x-2 gap-y-10 lg:mx-[15%] py-[4rem]">
            <TechnologyImage imageName="docker.png" />
            <TechnologyImage imageName="ec2.png" />
            <TechnologyImage imageName="fastapi.png" />
            <TechnologyImage imageName="jwt.png" />
            <TechnologyImage imageName="kafka.png" />
            <TechnologyImage imageName="next.png" />
            <TechnologyImage imageName="openai.png" />
            <TechnologyImage
              imageName="postgres.png"
              imageWidth={300}
              imageHeight={300}
            />
            <TechnologyImage
              imageName="postman.png"
              imageWidth={100}
              imageHeight={100}
            />
            <TechnologyImage
              imageName="python.png"
              imageWidth={100}
              imageHeight={100}
            />
            <TechnologyImage imageName="react.jpg" />
            <TechnologyImage imageName="swagger.png" />
          </div>
        </div>
      </section>
      <ContactMe />
      <div className="w-[100%] h-[5px] bg-[black]"></div>
    </>
  );
}
