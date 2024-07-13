import Card from "./card";
import cardImg1 from "../../../../public/assets/small.jpg";
import cardImg2 from "../../../../public/assets/moving-van.jpg";
import cardImg3 from "../../../../public/assets/ship.jpg";

export default function Service() {
  return (
    <div className="max-w-screen-2xl  overflow-hidden">
      <div className="  bg-white py-[20px] md:py-[50px] px-[20px] items-center flex flex-col">
        <h2 className="text-3xl pb-3  text-black  md:self-start border-b-2">
          Our Service
        </h2>

        <div className="pt-[40px] md:pt-[50px] flex flex-col  md:flex-row md:gap-20 gap-5">
          <Card
            img={cardImg1}
            title="Local Home Moving"
            caption=" Move your home with ease within the same city or locality. Flazz ensures a smooth transition with professional packing, secure transportation, and efficient unpacking at your new location."
          />
          <Card
            img={cardImg2}
            title="Inter-City Moving"
            caption="Moving to a different city? Flazz offers reliable inter-city moving services tailored to meet your specific needs. Our experienced team manages every aspect of the move, from packing fragile items to transporting furniture and setting up your new residence."
          />
          <Card
            img={cardImg3}
            title="Inter-Island Moving"
            caption="Whether you're relocating between islands, Flazz provides comprehensive services to handle the logistics and transportation of your belongings safely and efficiently. From packing at your current location to unpacking at your new home, we ensure a hassle-free experience."
          />
        </div>
      </div>
    </div>
  );
}
