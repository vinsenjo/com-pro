"use client"
import Image from "next/image";
import img from "../../../../../public/assets/buildings.jpg";
import  {motion}  from "framer-motion";

export default function AboutUs() {
  return (
    <div className="max-w-screen-2xl overflow-hidden ">
    <div className="bg-[#0d2030] min-h-[300px] text-white flex flex-col md:flex-row md:items-center md:justify-between md:gap-20 lg:px-[100px] lg:mt-0  p-5">
      <div   className="md:flex-initial duration-300 md:w-1/2 md:m-[10px]">
        <Image
          src={img}
          alt="Picture of the author"
          priority
          className="md:w-[2000px] w-[800px] rounded-xl  lg:rounded-xl  "
        />
      </div>
      <div   className=" duration-300  lg:px-14 rounded-b-xl lg:rounded-xl py-5 lg:py-32 place-content md:flex-initial lg:w-1/2 ">
        <h1 className="text-4xl text-[#cdff80] font-bold">About Us</h1>
        <p className="lg:text-lg pt-4">
          Welcome to Flazz, your trusted partner for all your home moving needs.
          We understand the significance of moving homes in your life, and at
          Flazz, we&apos;re committed to providing safe, efficient, and reliable
          services. With years of experience, we offer tailored solutions to
          cater to your specific requirements, including packing,
          transportation, and setup at your new destination. Our trained
          professionals and state-of-the-art equipment ensure a smooth and
          stress-free moving process. Our dedication lies in delivering
          high-quality services at competitive prices. Your trust is our top
          priority, and we&apos;re here to make your moving journey seamless and
          satisfying.
        </p>
      </div>
    </div>
    </div>
  );
}
