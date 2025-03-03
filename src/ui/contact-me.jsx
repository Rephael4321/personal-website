import Link from "next/link";
import Image from "next/image";

export default function ContactMe({ href, src, alt, resource }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-[1rem] mt-[3rem] md:ms-[1rem]">
      <Link
        className="border-[solid] border-[black] border-[1px] rounded-[50%] p-[0.3rem]"
        href={href}
        target="_blank"
      >
        <Image src={src} alt={alt} width={50} height={50} priority></Image>
      </Link>
      <Link className="text-[16px] md:text-[24px]" href={href} target="_blank">
        {resource}
      </Link>
    </div>
  );
}
