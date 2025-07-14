import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="w-full h-[10vh] text-white bg-[#0000003b] fixed backdrop-blur-[4px] flex items-center z-100 px-[2.6rem] md:px-[7%] xl:px-[15%]">
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
      </nav>
      <div id="nav-spacer" className="w-full h-[10vh]"></div>
    </>
  );
}
