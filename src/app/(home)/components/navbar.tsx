"use client";
import Image from "next/image";
import img from "../../../../public/assets/logo.png";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-screen-2xl  overflow-hidden" >
    <div className="   bg-opacity-90 ">
      <nav className=" flex md:shrink-0 text-xl   backdrop-blur-md  text-black p-4 lg:p-6  justify-between  lg:items-center  md:pt-[20px] lg:h-[60px] xl:p-8 ">
        <div className="w-[30%] text-start ">
          <Image
            src={img}
            alt="Picture of the author"
            className="lg:w-[200px] w-[100px] rounded-lg z-20 "
          />
        </div>

        <div className="lg:flex gap-7 md:gap-10 hidden pr-4  font-bold text-xl">
          <Link
            href="/"
            className="hover:scale-150 hover:font-bold duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:scale-150 hover:font-bold duration-200"
          >
            About
          </Link>
          <Link
            href="/product"
            className="hover:scale-150 hover:font-bold duration-200"
          >
            Service
          </Link>
          <Link
            href="/teams"
            className="hover:scale-150 hover:font-bold duration-200"
          >
            Team
          </Link>
        </div>
        {/* <div className="w-[30%] text-end  lg:flex hidden justify-end">
          <button className=" text-white font-bold text-center bg-[#235d58] hover:scale-110 duration-300 w-[140px] h-[60px] rounded-full">
            contact us
          </button>
        </div> */}

        <button
          title="burger"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden hover:scale-110 duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="30px "
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </button>
      </nav>
      <div
        
        className={`h-[400px] py-10 backdrop-blur-sm  bg-black/80 duration-75 z-20 lg:hidden absolute w-[100%] scroll-x ${
          isOpen ? "translate-x-0 " : " -translate-x-full"
        }`}
      >
        <div className="text-white flex flex-col text-center font-bold text-xl  overflow-hidden ">
          <Link
            onClick={() => setIsOpen(!isOpen)}
            className="py-[20px] hover:scale-125 hover:bg-black "
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            className="py-[20px] hover:scale-125 hover:bg-black"
            href="/about"
          >
            About
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            className="py-[20px] hover:scale-125 hover:bg-black"
            href="/product"
          >
            Service
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            className="py-[20px] hover:scale-125 hover:bg-black"
            href="/teams"
          >
            Team
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
