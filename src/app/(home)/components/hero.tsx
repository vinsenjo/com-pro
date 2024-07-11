"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
export default function Hero() {
  const text: string[] = ["MOVE", "MOVE WITH", "MOVE WITH JOY"];
  const [heading, setHeading] = useState<number>(0);

  useEffect(() => {
    const changeHeading = setInterval(
      () => setHeading((idx) => (idx == text.length - 1 ? idx : idx + 1)),
      500
    );
    return () => clearTimeout(changeHeading);
  }, []);
  return (
    <section className="m-auto bg-white flex-col items-center lg:gap-10 text-black max-w-[1440px]  flex lg:flex-row md:flex-nowrap flex-wrap px-[30px] py-[20px] md:py-[50px]  lg:px-[50px] lg:pt-[0px] lg:h-[700px]">
      <div className="flex-auto lg:w-2/4 text-center md:text-start md:mt-[0]">
        <h1 className="text-2xl md:text-4xl font-black tracking-wider">
          {text[heading]}
        </h1>
        <p className="text-sm  lg:text-lg my-[10px] lg:my-[20px] ">
          "Stay calm and trust the experts. Flazz - Your Easier and Safer
          Solution for Home Moving."
        </p>
        <button className="font-medium hover:bg-[#30ced0] hover:text-black  text-sm md:text-lg  text-white bg-[#4535C1] rounded-xl w-[110px] h-[40px] md:h-[65px] md:w-[150px]">
          Download App
        </button>
      </div>
      <div className="pt-[20px] lg:pt-[0] lg:w-2/4 ">
        <Image
          src="/assets/moving-hero.png"
          width={1500}
          height={800}
          alt="Picture of the author"
          className=" rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}
