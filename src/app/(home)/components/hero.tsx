"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import hero from "../../../../public/assets/sofa.jpg";
import Track from "./tracking";
export default function Hero() {
  const text: string[] = ["FUN", "US", "LOVE","CHILL","STORY","FUN", "US", "LOVE","CHILL","STORY","JOY"];
  const [heading, setHeading] = useState<number>(0);

  useEffect(() => {
    const changeHeading = setInterval(
      () => setHeading((idx) => (idx == text.length - 1 ? idx : idx + 1)),
      200
    );
    return () => clearTimeout(changeHeading);
  }, []);
  return (
    <div className="max-w-screen-2xl  overflow-hidden">
      <section className="lg:rounded-3xl mt-2  lg:mx-5  lg:py-[65px] bg-[#0d2030] text-white flex-col items-center lg:gap-10  flex lg:flex-row lg:flex-nowrap  px-[30px] py-[20px]   lg:px-[50px] ">
        <div
          className="text-center md:text-start md:mt-[0] lg:w-2/4 duration-150"
         
        >
          <h1 className=" my-10 lg:my-0 text-3xl font-bold lg:text-5xl lg:font-medium tracking-wider">
           MOVE WITH {text[heading]}
          </h1>
          <p className="text-lg my-10  lg:text-xl  lg:my-[25px] ">
            &quot;Stay calm and trust the experts. Flazz - Your Easier and Safer
            Solution for Home Moving.&quot;
          </p>
          
          <Track/>
        </div>
        <div className="pt-[20px] w-[500px] lg:pt-[0] lg:w-2/3">
          <Image
            src={hero}
            priority
            alt="Picture of the author"
            sizes="100vw"
            className=" rounded-2xl  w-[100%] h-auto hidden lg:block"
          />
        </div>
      </section>
    </div>
  );
}
