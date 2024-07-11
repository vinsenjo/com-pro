"use client";
import Image from "next/image";
import img from "../../../public/assets/logo.png"
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <nav className="max-w-screen-2xl flex md:shrink-0 text-xl  bg-white  text-black p-4 lg:p-6  justify-between  lg:items-center  md:pt-[20px] lg:h-[80px] xl:p-8 ">
        <div className="w-[30%] text-start ">
        <Image
          src={img}
          alt="Picture of the author"
          className="lg:w-[200px]   w-[100px] rounded-3xl"
        />
        </div>
        <div className="md:flex gap-7 md:gap-10 hidden  ">
          <Link href="/" className="hover:scale-150 hover:font-bold duration-200">Home</Link>
          <Link href="/about" className="hover:scale-150 hover:font-bold duration-200">About</Link>
          <Link href="/service" className="hover:scale-150 hover:font-bold duration-200">Service</Link>
          <Link href="/team" className="hover:scale-150 hover:font-bold duration-200">Team</Link>
        </div>
        <div className="w-[30%] text-end  lg:flex hidden justify-end">
          <button className=" text-white font-bold text-center bg-[#235d58] hover:scale-110 duration-300 w-[140px] h-[60px] rounded-full">
            contact us
          </button>
        </div>
        
        <button title="burger" onClick={() => setIsOpen(!isOpen)} className="md:hidden hover:scale-110 duration-300">
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
        className={`h-[400px]  lg:hidden bg-white  absolute w-[100%] scroll-x ${
          isOpen ? "block relative" : " hidden"
        }`}
      >
        <div className="text-black flex flex-col text-center font-bold text-xl  overflow-hidden ">
          <Link onClick={() => setIsOpen(!isOpen)} className="py-[20px] hover:scale-125 "  href="/">Home</Link>
          <Link onClick={() => setIsOpen(!isOpen)} className="py-[20px] hover:scale-125" href="/about">About</Link>
          <Link onClick={() => setIsOpen(!isOpen)} className="py-[20px] hover:scale-125" href="/">Service</Link>
          <Link onClick={() => setIsOpen(!isOpen)} className="py-[20px] hover:scale-125" href="/">Team</Link>
        </div>
      </div>
    </div>
  );
}
