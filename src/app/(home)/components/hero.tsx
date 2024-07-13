"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import hero from "../../../../public/assets/sofa.jpg";
export default function Hero() {
  const text: string[] = ["FUN", "US", "LOVE","CHILL","FAMILY","STORY","FUN", "US", "LOVE","CHILL","FAMILY","STORY","JOY"];
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
      <section className="rounded-xl mt-20 mx-5 bg-gradient-to-r text from-[#e1ece8] to-[#f1eedd] flex-col items-center lg:gap-10 text-black  flex lg:flex-row lg:flex-nowrap  px-[30px] py-[20px] md:py-[50px]  lg:px-[50px] lg:pt-32  ">
        <div
          className="text-center md:text-start md:mt-[0] lg:w-2/4 duration-150"
         
        >
          <h1 className=" text-4xl font-bold lg:text-6xl lg:font-black tracking-wider">
           MOVE WITH {text[heading]}
          </h1>
          <p className="text-lg  lg:text-xl my-[10px] lg:my-[20px] ">
            &quot;Stay calm and trust the experts. Flazz - Your Easier and Safer
            Solution for Home Moving.&quot;
          </p>
          <button className="font-medium hover:bg-[black] text-md md:text-lg duration-300  text-white bg-[#4535C1] rounded-xl mt-[20px] lg:mt-0 lg:rounded-2xl  w-[130px] h-[50px] md:h-[50px] md:w-[150px]">
            Download App
          </button>
        </div>
        <div className="pt-[20px] w-[500px] lg:pt-[0] lg:w-1/2">
          <Image
            src={hero}
            priority
            alt="Picture of the author"
            sizes="100vw"
            className=" rounded-3xl object-cover w-[100%] h-auto hidden lg:block"
          />
        </div>
      </section>
    </div>
  );
}
