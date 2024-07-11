'use client'
import img1 from "../../../../public/assets/building.jpg";
import img2 from "../../../../public/assets/dog.jpg";
import img3 from "../../../../public/assets/couple.jpg";
import Image from "next/image";

const slides = [img1, img2, img3];

export default function Carausel() {
  return (
    <div className="overflow-hidden relative h-max max-w-[900px]">
      <div className="flex justify-center">
        {slides.map((s) => {
          return (
            <Image
              src={s}
              alt="Picture of the author"
              className="w-screen md:w-[900px] "
            />
          );
        })}
      </div>
    </div>
  );
}
