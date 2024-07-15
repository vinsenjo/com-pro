import Image from "next/image";
import img1 from "../../../../../public/assets/van.jpg";
export default function ServiceHero() {
  return (
    <div className="max-w-screen-2xl  overflow-hidden">
      <div className="mx-5 my-5 text-black">
        <h1 className="text-5xl">SMALL MOVES</h1>
        <section className="grid lg:grid-cols-2  lg:grid-rows-2 gap-2  ">
          <div className="text-white bg-[#0d2030] rounded-2xl flex flex-col justify-center gap-3 py-10 px-5">
            <h3 className="text-xl lg:text-2xl border-b-2 border-[#cdff80] my-1">Snapmoves</h3>
            <p className="text-sm lg:text-lg">No move is too small for Flazz. If you are moving to another state or even cross country and have fewer items to move, we can move you to your new home with Snapmoves, our small moves program.</p>
            </div>
          <div className="bg-white  rounded-2xl row-span-2  relative">
            <Image
              src={img1}
              priority
              alt=" local moving"
              className="lg:rounded-2xl rounded-t-xl"
            />
            <p className="mt-5 lg:mt-0 w-max mx-5 border-2 text-base block lg:absolute px-5 lg:mx-10 top-3 text-center border-black rounded-2xl text-black ">Snapmoves</p>
            <div className="text-black flex flex-col lg:absolute lg:mx-10 p-5 lg:text-black lg:top-[65%]   rounded-2xl lg:bg-white/40 lg:backdrop-blur-sm">
              <h3 className="text-base font-bold lg:text-2xl">Snapmoves by Flazz for Small Moves</h3>
              <p className="text-sm lg:text-base">
              Are you moving a small home or just a few items? When you choose Snapmoves℠ by Mayflower, a small move can mean big benefits for you! Find out more about our small move services below.
              </p>
            </div>
          </div>
          <div className=" bg-[#cdff80]   rounded-2xl flex flex-col justify-center gap-3 py-10 px-5">
             <h3 className="text-xl lg:text-2xl border-b-2 border-black">Why Choose Us ?</h3>
          <p className="text-sm  lg:text-lg">Flazz realizes that each move is unique, which is why the benefits of Snapmoves are designed to meet your needs and make your move stress-free.</p></div>
        </section>
      </div>
    </div>
  );
}
