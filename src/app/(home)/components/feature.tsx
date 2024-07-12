import { motion } from "framer-motion";
import Image from "next/image";

interface IProps {
  title: string;
  caption: string;
  imgSrc: string;
}

export function Feature({ title, caption, imgSrc }: IProps) {
  return (
  
   <div  className="flex flex-col">
    <Image 
    src={imgSrc}
   
    alt="svg1"
    priority
    sizes="100vw"
    className="w-[70px] h[20px]"
    />
    <h3 className="font-bold text-xl py-[20px]">{title}</h3>
    <p className="text-justify">{caption}</p>
 
   </div>
  );
}
