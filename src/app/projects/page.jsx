import Link from "next/link";

export default function Projects() {
  return (
    <>
      <section className="px-[2.6rem] md:px-[7%] xl:px-[15%] mb-[7rem] mt-[5vh]">
        <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold text-[#32e6e2] font-display mb-[3rem] text-center md:text-left">
          My Projects
        </h1>

        <div className="flex flex-col gap-[4rem] md:gap-[6rem]">
          {/* Neura Query Project */}
          <div className="flex flex-col md:flex-row w-full md:w-[85%] xl:w-[70%] gap-6">
            <div className="w-[1px] bg-[#f0f0f0] mb-6 md:mb-0 md:me-[3rem]" />
            <div className="flex flex-col gap-[1rem]">
              <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#32e6e2] font-display">
                Neura Query
              </h2>
              <p className="text-[1.1rem] font-text leading-relaxed text-[#f0f0f0]">
                AI powered platform for effortless access and interaction with
                online SQL databases
              </p>
              <Link href="/projects/neura-query">
                <button className="px-10 py-4 rounded-[8px] text-black bg-[#32e6e2] font-text transition-colors duration-500 ease-in-out hover:bg-[#1A6AFF] w-fit mt-2">
                  View Project
                </button>
              </Link>
            </div>
          </div>

          {/* Hamefanek Project */}
          <div className="flex flex-col md:flex-row w-full md:w-[85%] xl:w-[70%] gap-6">
            <div className="w-[1px] bg-[#f0f0f0] mb-6 md:mb-0 md:me-[3rem]" />
            <div className="flex flex-col gap-[1rem]">
              <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#32e6e2] font-display">
                Hamefanek
              </h2>
              <p className="text-[1.1rem] font-text leading-relaxed text-[#f0f0f0]">
                An online store for selling ice creams including content
                management system (CMS) for handling products and orders
              </p>
              <Link href="/projects/hamefanek">
                <button className="px-10 py-4 rounded-[8px] text-black bg-[#32e6e2] font-text transition-colors duration-500 ease-in-out hover:bg-[#1A6AFF] w-fit mt-2">
                  View Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

