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
            title="Small Move"
            caption="No move is too small for Flazz. If you are moving to another state or even cross country and have fewer items to move, we can move you to your new home with Snapmoves, our small moves program."
          />
          <Card
            img={cardImg2}
            title="Local Move"
            caption="Moving from one part of the city to another part or a few zip codes away is actually quite common for several reasons. Job change, upgrading or even downsizing your home, and so on. And with these changes, are you considering hiring a local mover for an easy, stress-free, and hassle-free move? If you are, read on for the information that Flazz trusted movers compiled to help you find the right local mover for your needs"
          />
          <Card
            img={cardImg3}
            title="Long Distance Move"
            caption="Let us make your long distance move EASY. With mix and match moving services like packing and storage, as well as moving protection, unmatched customer service and some of the best long distance moving company ratings in the country, you can rest easy knowing you are in the hands of Most Trusted Moving Company"
          />
        </div>
      </div>
    </div>
  );
}
