import Image from "next/image";
import Link from "next/link";

export default function HamefanekProject() {
  return (
    <>
      <section
        id="hero-section"
        className="flex flex-col items-center px-4 sm:px-[2.6rem] md:px-[7%] xl:px-[15%] md:h-[40vh] md:mb-[5vh] gap-10 mt-[8vh]"
      >
        <div className="mt-4 md:mt-0 text-center">
          <h1 className="text-[2rem] md:text-[3rem] font-semibold pb-4 tracking-[5px] font-display">
            Hamefanek
          </h1>
        </div>
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
              An online store for selling ice creams including content
              management system (CMS) for handling products and orders
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-[2.6rem] md:px-[7%] xl:px-[15%] mb-[7rem]">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-[#32e6e2] font-display mb-[2rem]">
          Features
        </h2>
        <div className="flex flex-col md:flex-row w-full md:w-[85%] xl:w-[70%] gap-8 md:gap-12">
          <div className="w-[1px] bg-[#f0f0f0] mb-6 md:mb-0 md:me-[3rem]" />
          <div className="flex flex-col gap-[3rem] md:gap-[4rem]">
            {/* Clients */}
            <div className="flex flex-col gap-[1rem]">
              <h3 className="text-[1.5rem] md:text-[1.8rem] font-bold text-[#32e6e2] font-display">
                Clients
              </h3>
              <ul className="flex flex-col gap-[0.8rem] font-text text-[1.4rem] text-[#f0f0f0] list-none">
                <li className="flex items-start">
                  <span className="text-[#32e6e2] mr-2">&gt;</span>
                  <span>Select products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#32e6e2] mr-2">&gt;</span>
                  <span>Cart view with prices, discounts and delivery fee</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#32e6e2] mr-2">&gt;</span>
                  <span>Shipping history</span>
                </li>
              </ul>
            </div>

            {/* Owner */}
            <div className="flex flex-col gap-[1rem]">
              <h3 className="text-[1.5rem] md:text-[1.8rem] font-bold text-[#32e6e2] font-display">
                Owner
              </h3>
              <ul className="flex flex-col gap-[0.8rem] font-text text-[1.4rem] text-[#f0f0f0] list-none">
                <li className="flex items-start">
                  <span className="text-[#32e6e2] mr-2">&gt;</span>
                  <span>Manage products, categories and sales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#32e6e2] mr-2">&gt;</span>
                  <span>View and fulfill orders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#32e6e2] mr-2">&gt;</span>
                  <span>Secured connection for admin panel</span>
                </li>
              </ul>
            </div>

            {/* Drivers */}
            <div className="flex flex-col gap-[1rem]">
              <h3 className="text-[1.5rem] md:text-[1.8rem] font-bold text-[#32e6e2] font-display">
                Drivers
              </h3>
              <ul className="flex flex-col gap-[0.8rem] font-text text-[1.4rem] text-[#f0f0f0] list-none">
                <li className="flex items-start">
                  <span className="text-[#32e6e2] mr-2">&gt;</span>
                  <span>View and update orders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#32e6e2] mr-2">&gt;</span>
                  <span>
                    Restricted access for delivery fulfillment specific purposes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Try it yourself */}
      <section className="flex flex-col md:flex-row px-4 sm:px-[2.6rem] md:px-[7%] lg:px-[12%] xl:px-[15%] justify-center md:justify-start gap-10 md:mb-[20vh]">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-[#32e6e2] font-display mb-[2rem]">
            View store
          </h2>
          <Link
            href="https://haim-ice-cream.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mt-2 mb-6"
          >
            <p className="text-[1.3rem] text-center md:text-left">
              https://haim-ice-cream.com/
            </p>
          </Link>
          <Link
            href="https://haim-ice-cream.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-[90vw] max-w-[350px] h-[45vw] max-h-[159px] md:w-[200px] md:h-[91px] xl:w-[300px] xl:h-[136px]">
              <Image
                className="object-fill"
                src="/hamefanek.png"
                alt="Hamefanek website"
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
