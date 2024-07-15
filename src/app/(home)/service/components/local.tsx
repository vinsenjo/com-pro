import Image from "next/image";
import img from "@/../../public/assets/truck.jpg";
import img1 from "@/../../public/assets/tutup.jpg";
import img2 from "@/../../public/assets/baby.jpg";
export default function Local() {
  return (
    <div className="max-w-screen-2xl  overflow-hidden">
      <div className="flex flex-col mx-5 mt-5">
        <h1 className="text-5xl text-black">LOCAL MOVES</h1>
        <div className="flex flex-col lg:flex-row gap-2 ">
          <div className="bg-white lg:w-1/2 rounded-2xl  relative">
            <Image
              src={img}
              priority
              alt=" local moving"
              className="lg:rounded-2xl rounded-t-xl"
            />
            <p className="mt-5 lg:mt-0 w-max mx-5 rounded-full lg:text-white border-2 text-base block lg:absolute px-5 lg:mx-10 top-3 text-center border-whiterounded-2xl text-black ">
              Snapmoves
            </p>
            <div className="text-black flex flex-col lg:absolute right-2 lg:w-[250px] lg:mx-1 p-5 lg:text-black lg:top-[15%]   rounded-2xl lg:bg-white/40 lg:backdrop-blur-lg">
              <h3 className="text-base font-bold lg:text-2xl">
                Local Movers by Flazz
              </h3>
              <p className="text-sm lg:text-base">
                Moving locally has never been easier. Mayflower® interstate
                moving agents independently provide local moving services under
                their own businesses and brands.
              </p>
            </div>
          </div>
          <div className="rounded-3xl lg:w-1/2 flex flex-col gap-5 pb-5 px-5 lg:px-10 text-black">
            <h2 className="text-3xl">What is a Local Move?</h2>
            <p className="lg:text-lg">
              Local moves are considered moves that are a short distance within
              the same state. Typically, local moves occur within the same city
              or a 50-mile radius. State lines help determine whether a move is
              a local move or an interstate move. For example, a move from
              Providence, Rhode Island to Boston suburb would not be classified
              as a local move.
              <br />
              <span className="font-semibold">Intrastate moves</span> are
              usually longer distance moves that occur within the same state.
              These moves might not be considered local even though they are
              within the same state. Examples of an intrastate move would be
              moving from San Francisco to Los Angeles, or moving from Dallas to
              Houston.
              <br />
              <span className="font-semibold">Interstate moves </span>
              are different from local or intrastate moves because they involve
              moving goods across state lines. Interstate moves may also be
              referred to as long distance or cross country moves. Interstate
              moves require special authority from Federal regulators. This is
              why shorter moves within a Metro Area may not be considered a
              “local move.”
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-5 mx-5 lg:flex-row flex-col items-center lg:text-lg bg-[#0d2030] rounded-xl p-10 text-white my-5">
        <div className=" lg:px-10 lg:w-1/2">
          <h3 className="text-2xl py-5">How Much Does a Local Move Cost?</h3>
          <p>
            Moving costs can vary greatly depending on the type of move you’re
            making. Add-ons, such as packing and storage can also factor into
            the price of your move. Distance is typically the biggest factor in
            pricing a move. Because of this pricing model, shorter distance
            moves are often more affordable than intrastate or interstate moves.
          </p>
        </div>
        <div className="lg:px-10 lg:w-1/2">
          <Image
            src={img1}
            priority
            alt=" local moving"
            className="lg:rounded-2xl rounded-xl"
          />
        </div>
      </div>
      <div className="flex gap-5 mx-5 lg:flex-row flex-col items-center lg:text-lg bg-[#0d2030] rounded-xl p-10 text-white my-5">
        <div className="lg:px-10 lg:w-1/2">
          <Image
            src={img2}
            priority
            alt=" local moving"
            className="lg:rounded-2xl rounded-xl"
          />
        </div>
        <div className=" lg:px-10 lg:w-1/2">
          <h3 className="text-2xl py-5">Local Home Moving Services</h3>
          <p>
            Comparing local moving companies can be a daunting task itself. With
            our network of more than 200 agents, Mayflower provides full
            service, interstate moving services. When you move locally, within
            the same state, our interstate moving agents are able to
            independently provide moving services under their own brands that
            you would expect from a nationwide mover. Local moving services that
            these movers provide independently under their own brands help bring
            you peace of mind and ensure a stress-free move no matter the
            distance.
          </p>
        </div>
      </div>
    </div>
  );
}
