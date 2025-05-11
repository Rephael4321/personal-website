import Image from "next/image";

export default function TechnologyImage({
  imageName,
  imageWidth,
  imageHeight,
}) {
  return (
    <Image
      className="my-[4rem] md:my-[0]"
      src={`/technologies/${imageName}`}
      alt="technology"
      width={imageWidth ? imageWidth : 150}
      height={imageHeight ? imageHeight : 150}
      priority
    ></Image>
  );
}
