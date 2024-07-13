
import Image, { StaticImageData } from "next/image";

interface IProps {
  img: StaticImageData;
  title: string;
  caption: string;
}

export default function Card({ img, title, caption }: IProps) {
  return (
    <div className="overflow-hidden  pb-[20px] flex flex-col bg-white  border-2  text-black group  lg:w-[400px]  rounded-2xl duration-100  shadow-md hover:shadow-xl">
      <Image
       priority 
       src={img} 
       alt="Card" 
       sizes="100vw" 
       className=" lg:rounded-t-2xl max-h-[250px] group-hover:scale-105 duration-500 object-cover flex-1 w-[100%] h-auto" />
      <div className="bg-white py-[20px] rounded-xl object-cover">
        <p className="text-xl font-bold px-[40px] pt-[10px]">{title}</p>
        <p className="text-sm py-[10px] px-[40px]  ">{caption}</p>
        <button className="bg-[#0d2030] font-semibold text-white mx-[40px] p-[10px] rounded-xl duration-150 border-2 hover:border-black hover:bg-white hover:text-black" >Learn More</button>
      </div>
    </div>
  );
}
