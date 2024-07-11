import Image from "next/image";
import img from "../../../../../public/assets/building.jpg";
export default function AboutUs() {
  return (
    <div className="bg-[#F5F7F8] min-h-[400px] text-black flex flex-col md:flex-row md:items-center md:justify-between md:gap-20 md:px-[100px]  p-[30px]">
      <div className="md:flex-initial md:w-1/2 md:m-[10px]">
        <Image
          src={img}
          alt="Picture of the author"
          className="md:w-[2000px] w-[800px]  rounded-lg  "
        />
      </div>
      <div className="pt-5 place-content md:flex-initial md:w-1/2 ">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-justify pt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          iste deleniti similique non optio quod expedita, veniam ut officia
          vel! Similique accusantium quia rerum eum consectetur earum dolor
          consequatur alias neque, voluptas, itaque saepe adipisci numquam autem
          dolorem. Tempore odio illo sunt error quia velit molestias sequi
          inventore placeat commodi?
        </p>
      </div>
    </div>
  );
}
