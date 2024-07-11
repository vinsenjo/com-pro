"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import hero from "../../../public/assets/sofa.webp";
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
    <div className="max-w-screen-2xl overflow-hidden">
      <section className="m-auto  bg-white flex-col items-center lg:gap-10 text-black  flex lg:flex-row lg:flex-nowrap  px-[30px] py-[20px] md:py-[50px]  lg:px-[50px] lg:pt-[0px] lg:h-[700px] ">
        <div className="text-center md:text-start md:mt-[0] lg:w-2/4">
          <h1 className="text-2xl md:text-4xl font-black tracking-wider">
            {text[heading]}
          </h1>
          <p className="text-sm  lg:text-lg my-[10px] lg:my-[20px] ">
            &quot;Stay calm and trust the experts. Flazz - Your Easier and Safer
            Solution for Home Moving.&quot;
          </p>
          <button className="font-medium hover:bg-[black] text-sm md:text-lg  text-white bg-[#4535C1] rounded-xl w-[110px] h-[40px] md:h-[65px] md:w-[150px]">
            Download App
          </button>
        </div>
        <div className="pt-[20px] w-[500px] lg:pt-[0] lg:w-1/2">
          <Image
            src={hero}
            priority
            alt="Picture of the author"
            className=" rounded-3xl object-cover "
          />
        </div>
      </section>
    </div>
  );
}
