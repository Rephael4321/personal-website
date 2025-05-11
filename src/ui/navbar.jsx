import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="w-[100%] h-[10vh] bg-[#0000003b] fixed backdrop-blur-[4px] flex items-center z-100">
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
    </>
  );
}
