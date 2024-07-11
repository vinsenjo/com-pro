import Image from "next/image";

interface IProps {
  title: string;
  caption: string;
  imgSrc: string;
}

export function Feature({ title, caption, imgSrc }: IProps) {
  return (
   <div className="flex flex-col">
    <Image 
    src={imgSrc}
    width={50}
    height={100}
    alt="svg1"
    />
    <h3 className="font-bold text-xl py-[20px]">{title}</h3>
    <p>{caption}</p>
   </div>
  );
}
