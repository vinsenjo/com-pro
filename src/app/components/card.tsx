
import Image, { StaticImageData } from "next/image";

interface IProps {
  img: StaticImageData;
  title: string;
  caption: string;
}

export default function Card({ img, title, caption }: IProps) {
  return (
    <div className="overflow-hidden flex flex-col bg-white  border-2  text-black group  max-w-[400px]  rounded-2xl duration-100  shadow-md hover:shadow-xl grayscale-[25%] hover:grayscale-0">
      <Image src={img} alt="Card " className=" rounded-t-2xl max-h-[300px] group-hover:scale-105 duration-500 object-cover flex-1" />
      <div className="bg-white py-[20px] rounded-xl object-cover">
        <p className="text-xl font-bold px-[40px] pt-[10px]">{title}</p>
        <p className="text-sm py-[10px] px-[40px]  ">{caption}</p>
        <button className="bg-[#235d58] font-semibold text-white mx-[40px] p-[10px] rounded-xl duration-150 border-2 border-black hover:bg-white hover:text-black" >Learn More</button>
      </div>
    </div>
  );
}
