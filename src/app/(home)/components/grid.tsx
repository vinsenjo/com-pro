import svg1 from "../../home_assets/footprint-line.svg";
import svg2 from "../../home_assets/team.svg";
import svg3 from "../../home_assets/culture-svgrepo-com.svg";
import Image from "next/image";
export default function Grid() {
  return (
    <div className="max-w-screen-2xl  overflow-hidden text-black">
      <div className=" lg:my-5 lg:px-5 p-5">
        <div className="lg:px-5">
          <p className="border-2 border-black text-sm lg:text-base p-2 w-max rounded-3xl lg:px-5">
            CUSTOMER CENTRIC APPROACH
          </p>
        </div>
        <div className="flex  justify-between gap-8 py-5">
          <h2 className="w-1/3 lg:w-[500px] text-lg lg:text-4xl lg:px-5 ">
            Experience Excellence with FastShip Logistic
          </h2>
          <p className="w-1/2 lg:w-[600px] text-sm lg:text-base mx-5">
            We prioritize, reliability, and a customer-centric approach, making
            your satisfication our top priority. Experience the difference of a
            logistics partner committed to excellence-experience FastShip
            Logistics.
          </p>
        </div>
        <div className="bg-black/10 backdrop-blur-90 py-5 lg:py-10 px-2 lg:px-10 rounded-xl grid grid-cols-2 lg:grid-cols-3  lg:grid-rows-2 gap-2 ">
          <div className="lg:row-span-2 col-span-2 lg:col-span-1 lg:py-10  bg-[#0d2030] rounded-2xl  p-3 lg:p-5 lg:items-start flex flex-col  justify-around">
            <div className="rounded-full  w-[70px] h-[70px] bg-[#cdff80]  text-black flex items-center justify-center">
              <Image
                src={svg1}
                priority
                sizes="100vw"
                alt="history"
                className="w-[60px] h[60px]"
              />
            </div>
            <p className="text-white text-sm lg:text-lg lg:text-start  mt-5 my-8 p-2">
              Flazz was established in 1998 with a commitment to revolutionize
              the home moving service industry. Our journey began with a passion
              for providing seamless, stress-free moving experiences for
              individuals and families. Over the years, we have grown steadily,
              expanding our reach and refining our services to cater to the
              diverse needs of our clients Quos!
            </p>
            <button className="border-2 mt-3 border-black p-2 w-max rounded-3xl lg:px-5 font-semibold hover:text-white hover:bg-black bg-[#cdff80]">
              Learn More →
            </button>
          </div>
          <div className=" rounded-2xl border-2 h-[300px] flex flex-col  justify-center gap-3 lg:justify-center lg:px-10  p-3 bg-[#cdff80]">
            <Image
              src={svg2}
              priority
              sizes="100vw"
              alt="history"
              className="w-[60px] h[60px]"
            />
            <h3 className="text-xl font-bold">Customer Centric Excellence</h3>
            <p className=" text-sm">
              Putting customers first, delivering personalized solution, and
              ensuring satisfaction at every step
            </p>
          </div>
          <div className=" rounded-2xl border-2  flex flex-col  justify-center gap-3 lg:justify-center lg:px-10   p-3 bg-white">
            <Image
              src={svg1}
              priority
              sizes="100vw"
              alt="history"
              className="w-[60px] h[60px]"
            />
            <h3 className="text-xl font-bold">Integrity in Every Action</h3>
            <p className=" text-sm">
              Operating with the highest ethical standards, fastering
              transparency, and building trust.
            </p>
          </div>
          <div className=" rounded-2xl border-2 h-[300px] flex flex-col  justify-center gap-3 lg:justify-center lg:px-10   p-3 bg-white">
            <Image
              src={svg1}
              priority
              sizes="100vw"
              alt="history"
              className="w-[60px] h[60px]"
            />
            <h3 className="text-xl font-bold">Innovation as a Driver</h3>
            <p className=" text-sm">
              Embracing innovation, investing in cutting-edge technology, and
              offering forward-thinking solutions.
            </p>
          </div>
          <div className=" rounded-2xl border-2  flex flex-col  justify-center gap-3 lg:justify-center lg:px-10  p-3 bg-[#cdff80]">
            <Image
              src={svg3}
              priority
              sizes="100vw"
              alt="history"
              className="w-[60px] h[60px]"
            />
            <h3 className="text-xl font-bold">Sustainbility at Our Core</h3>
            <p className=" text-sm">
              Balancing progress and responsibility, actively seeking
              eco-friendly practices for sustainable growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
