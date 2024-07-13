"use client"
import Image from "next/image";
import img from "../../../../../public/assets/buildings.jpg";
import  {motion}  from "framer-motion";

export default function AboutUs() {
  return (
    
    <div className="bg-[#F5F7F8] min-h-[400px] text-black flex flex-col md:flex-row md:items-center md:justify-between md:gap-20 md:px-[100px]  p-[30px]">
      <div   className="md:flex-initial duration-300 md:w-1/2 md:m-[10px]">
        <Image
          src={img}
          alt="Picture of the author"
          priority
          className="md:w-[2000px] w-[800px] rounded-t-xl  lg:rounded-xl  "
        />
      </div>
      <div   className="bg-gradient-to-r from-[#e1ece8] to-[#f1eedd] duration-300 px-5 lg:px-14 rounded-b-xl lg:rounded-xl py-5 lg:py-32 place-content md:flex-initial md:w-1/2 ">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-justify pt-4">
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
  );
}
