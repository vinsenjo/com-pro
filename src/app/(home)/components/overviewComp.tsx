import Image from "next/image";

interface IProps {
  title: string;
  caption: string;
  imgSrc: string;
}

export function OverviewCard({ title, caption, imgSrc }: IProps) {
  return (
    <div className="bg-white  p-7 flex flex-col lg:flex-row gap-5 items-center rounded-xl ">
      <div>
        <h2 className="font-bold text-2xl text-[#235d58]">{title}</h2>
        <p className="py-[10px] text-sm lg:text-lg " >{caption}</p>
      </div>
      <Image
        src={imgSrc}
        width={500}
        height={500}
        alt="Picture of the author"
        className=" bg-white border-[#235d58] lg:p-[10px] p-[5px] self-center  rounded-3xl border-2"
      />
    </div>
  );
}
