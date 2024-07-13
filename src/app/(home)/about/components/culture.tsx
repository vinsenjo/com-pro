"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../../../../public/assets/hand.jpg";
import img2 from "../../../../../public/assets/culture.jpg";
export default function Culture() {
  return (
    <div className="max-w-screen-2xl  overflow-hidden">
      <section className=" text-white grid px-2 lg:grid-cols-2 lg:grid-rows-2 gap-1 my-2 lg:mx-10 rounded-xl">
        <div className="   text-sm">
          <Image
            src={img2}
            priority
            sizes="100vw"
            alt="Picture of the author"
            className="rounded-lg "
          />
        </div>
        <div className="bg-[#0d2030] flex flex-col justify-center rounded-lg p-5">
          <h3 className=" text-3xl pb-3 text-[#cdff80]">Our Story</h3>
          <p className="text-lg">
            Founded in 1998, Flazz House Moving has been a pioneer in the house
            moving industry, serving clients across the nation with unparalleled
            expertise and dedication. Our journey began with a vision to
            revolutionize the concept of relocating homes, offering innovative
            solutions that ensure safety, efficiency, and reliability. Over the
            years, Flazz has grown from a local operation into a nationally
            recognized leader in the field, thanks to our commitment to
            excellence and customer satisfaction
          </p>
        </div>
        <div className="  bg-[#0d2030] flex flex-col justify-center rounded-lg p-5">
          <h3 className="text-3xl pb-3 text-[#cdff80]">
            Our Culture
          </h3>
          <p className="text-lg">
            At Flazz House Moving, our culture is deeply rooted in integrity,
            teamwork, and continuous improvement. We believe in fostering a work
            environment where every team member is valued and empowered to
            contribute their best. Our success is built on a foundation of trust
            and transparency, both with our clients and within our team. We
            strive to uphold the highest standards of professionalism and
            ethical conduct in everything we do.
          </p>
        </div>
        <div className="bg-black   rounded-lg">
          <Image
            src={img1}
            priority
            sizes="100vw"
            layout="responsive"
            alt="Picture of the author"
            className="rounded-lg "
          />
        </div>
      </section>
    </div>
  );
}
