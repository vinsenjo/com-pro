import Image from "next/image";
import img from "@/../../public/assets/container.jpg";
export default function Long() {
  return (
    <div className="max-w-screen-2xl  overflow-hidden mx-5">
      <div className="flex flex-col">
        <h1 className="text-5xl text-black">LONG DISTANCE MOVES</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-5 relative ">
            <div className=" flex flex-col   lg:gap-5 top-[58%] lg:mx-5 p-2 my-3  lg:absolute   text-black lg:top-[70%]   rounded-xl lg:bg-white/40 lg:backdrop-blur-sm">
              <h3 className="text-base font-bold lg:text-2xl">
                Snapmoves by Flazz for Small Moves
              </h3>
              <p className="text-sm lg:text-lg">
                Let us make your long distance move EASY. With mix and match
                moving services like packing and storage, as well as moving
                protection, unmatched customer service and some of the best long
                distance moving company ratings in the country, you can rest
                easy knowing you are in the hands of America’s Most Trusted
                Moving Company.
              </p>
            </div>
            <Image
              src={img}
              alt="gambar container"
              className="rounded-xl w-full"
            />
          </div>
          <div className="mx-5 lg:w-1/2 text-black flex flex-col gap-5">
            <div>
              <h3 className="text-2xl font-bold">
                Trusted Long Distance Moving Company
              </h3>
              <p className="lg:text-lg pt-3">
                Flazz has been providing customers with reliable and
                professional long distance moving services for more than 90
                years. For close to a century of perfecting the interstate
                moving process (from quote to move-in day), we understand what
                customers need in order to have a great moving experience. We
                strive to provide customers everything they need for a
                successful move. This includes allowing you to build your own
                move plan with customizable service options that meet your
                needs, budget and schedule. We also include our basic Full Value
                Protection option in every initial moving quote. We have earned
                the reputation of America’s Most Trusted Moving Company with the
                flexibility we offer to customers.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-2 ">
              <div className="flex flex-col  justify-center p-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={50}
                  className=""
                >
                  <path d="M3 10H2V4.00293C2 3.44903 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.43788 22 4.00293V10H21V20.0015C21 20.553 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5525 3 20.0015V10ZM19 10H5V19H19V10ZM4 5V8H20V5H4ZM9 12H15V14H9V12Z"></path>
                </svg>
                <h4 className="text-lg font-semibold">Packing and Unpacking</h4>
                <p className="text-sm lg:text-base">
                  Let us save you time and hassle with our full and partial
                  packing options. We can even unpack for you. Whatever your
                  level of need, we can handle it for you!
                </p>
              </div>
              <div className="flex flex-col  justify-center p-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={50}
                >
                  <path d="M8.96456 18C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456ZM15 7H3V15.0505C3.63526 14.4022 4.52066 14 5.5 14C6.8962 14 8.10145 14.8175 8.66318 16H14.3368C14.5045 15.647 14.7296 15.3264 15 15.0505V7ZM17 13H21V12.715L18.9917 10H17V13ZM17.5 19C18.1531 19 18.7087 18.5826 18.9146 18C18.9699 17.8436 19 17.6753 19 17.5C19 16.6716 18.3284 16 17.5 16C16.6716 16 16 16.6716 16 17.5C16 17.6753 16.0301 17.8436 16.0854 18C16.2913 18.5826 16.8469 19 17.5 19ZM7 17.5C7 16.6716 6.32843 16 5.5 16C4.67157 16 4 16.6716 4 17.5C4 17.6753 4.03008 17.8436 4.08535 18C4.29127 18.5826 4.84689 19 5.5 19C6.15311 19 6.70873 18.5826 6.91465 18C6.96992 17.8436 7 17.6753 7 17.5Z"></path>
                </svg>
                <h4 className="text-lg font-semibold">Car Shipping</h4>
                <p className="text-sm lg:text-base">
                  If you’re not driving your car to your new home, no need to
                  worry. Our interstate movers can help move your car to your
                  new destination.
                </p>
              </div>
              <div className="flex flex-col  justify-center p-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={50}
                >
                  <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                </svg>
                <h4 className="text-lg font-semibold">Debris Removal</h4>
                <p className="text-sm lg:text-base">
                  Let us assist with the clean-up process at your new home with
                  our trash and debris removal service.
                </p>
              </div>
              <div className="flex flex-col  justify-center p-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={50}
                >
                  <path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"></path>
                </svg>
                <h4 className="text-lg font-semibold">Storage Service</h4>
                <p className="text-sm lg:text-base">
                  If you need temporary storage any time as part of your long
                  distance move, we offer short and long term storage options.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Cost of a Long Distance Mover</h3>
              <p className="py-2 lg:text-lg">
                Flazz long distance moving quotes take many factors into
                account, so you receive a fair quote for your unique move. Among
                other things, we assess the weight or volume of your belongings,
                the distance of your move and what services you request to
                determine your expected moving cost. All long distance moves are
                different, which is why we gather all of the preliminary
                information before providing you with a move cost. This way we
                ensure we give you the most accurate moving quote for your
                out-of-state move as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
