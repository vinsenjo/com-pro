import Image from "next/image";
export default function Carausel() {
  return (
    <div className=" lg:px-[80px]">
      <div className="carousel carousel-end h-[400px] lg:rounded-box ">
        <div className="carousel-item">
        <Image src='/assets/baby.jpg' width={600} height={500} alt="Card " className="  group-hover:scale-105 duration-100 object-cover" />
        </div>
        <div className="carousel-item">
        <Image src='/assets/couple.jpg' width={600} height={500} alt="Card " className="  group-hover:scale-105 duration-100 object-cover" />
        </div>
       
        <div className="carousel-item">
        <Image src='/assets/family.jpg' width={600} height={500} alt="Card " className="  group-hover:scale-105 duration-100 object-cover" />
        </div>
        <div className="carousel-item">
        <Image src='/assets/tutup.jpg' width={600} height={500} alt="Card " className="  group-hover:scale-105 duration-100 object-cover" />
        </div>
        <div className="carousel-item">
        <Image src='/assets/packing.jpg' width={600} height={500} alt="Card " className="  group-hover:scale-105 duration-100 object-cover" />
        </div>
      </div>
    </div>
  );
}
