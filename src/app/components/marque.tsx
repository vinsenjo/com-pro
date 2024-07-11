import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Marque = () => (
  <Marquee autoFill>
    <Image
      src="/assets/sofa.webp"
      width={300}
      height={800}
      alt="Picture of the author"
      className=" object-cover max-w-screen-xl"
    />
    <Image
      src="/assets/sofa.webp"
      width={300}
      height={800}
      alt="Picture of the author"
      className=" object-cover max-w-screen-xl"
    />
    <Image
      src="/assets/sofa.webp"
      width={300}
      height={800}
      alt="Picture of the author"
      className=" object-cover max-w-screen-xl"
    />
  </Marquee>
);

export default Marque;
