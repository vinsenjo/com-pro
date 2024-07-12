import Image from "next/image";
import img1 from "@/../../public/assets/baby.jpg";
import img2 from "@/../../public/assets/couple.jpg";
import img3 from "@/../../public/assets/family.jpg";
import img4 from "@/../../public/assets/tutup.jpg";
export default function Carausel() {
  return (
    <div className="flex justify-center">
      <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            className="rounded-box"
          />
        </div>
      </div>
    </div>
  );
}

<Image
  src={img4}
  sizes="100vw"
  priority
  alt="Card "
  className="w-[100%] h-auto  group-hover:scale-105 duration-100 object-cover"
/>;
