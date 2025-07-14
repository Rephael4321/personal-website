"use client";

import React from "react";

const row1 = [
  "/technologies/docker.png",
  "/technologies/ec2.png",
  "/technologies/fastapi.png",
  "/technologies/jwt.png",
  "/technologies/kafka.png",
  "/technologies/next.png",
];

const row2 = [
  "/technologies/openai.png",
  "/technologies/postgres.png",
  "/technologies/postman.png",
  "/technologies/python.png",
  "/technologies/react.png",
  "/technologies/swagger.png",
];

function renderRow(images, animationClass, rowKey) {
  const allImages = [...images, ...images]; // clone for loop

  return (
    <div key={rowKey} className="overflow-hidden mt-6 first:mt-0">
      <div className={`flex ${animationClass} gap-4 sm:gap-6 w-max`}>
        {allImages.map((src, idx) => (
          <div
            key={`${rowKey}-${idx}`}
            className="w-28 sm:w-32 md:w-40 h-20 sm:h-24 md:h-28 p-2 sm:p-3 md:p-4 flex items-center justify-center bg-white rounded-lg shadow-md shrink-0"
          >
            <img
              src={src}
              alt={`tech-${rowKey}-${idx}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechnologiesCarousel() {
  return (
    <section className="px-4 sm:px-[2.6rem] md:px-[7%] xl:px-[15%] mb-[4rem] sm:mb-[7rem] overflow-hidden">
      <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] font-bold text-[#32e6e2] font-display mb-[2rem]">
        Technologies
      </h2>
      {renderRow(row1, "animate-marquee", "row1")}
      {renderRow(row2, "animate-marquee-reverse", "row2")}
    </section>
  );
}
