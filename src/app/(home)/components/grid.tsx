import svg1 from "../../home_assets/footprint-line.svg";
import svg2 from "../../home_assets/team.svg";
import svg3 from "../../home_assets/culture-svgrepo-com.svg";
import Image from "next/image";
export default function Grid() {
  return (
    <div className="max-w-screen-2xl  overflow-hidden text-black">
      <div className=" lg:my-5 lg:px-5 p-5">
        <div className="lg:px-5">
          <p className="border-2 border-black p-2 w-max rounded-3xl lg:px-5">
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
        <div className="grid grid-cols-2 lg:grid-cols-3  lg:grid-rows-4 gap-2 lg:px-5">
          <div className="lg:row-span-4 lg:col-span-1 col-span-2 bg-[#0d2030] rounded-2xl  p-3 lg:p-5 lg:items-start flex flex-col  justify-around">
            <div className="rounded-full  w-[70px] h-[70px] bg-[#cdff80] text-black flex items-center justify-center">
              <Image
                src={svg1}
                priority
                sizes="100vw"
                alt="history"
                className="w-[60px] h[60px]"
              />
            </div>
            <p className="text-white text-sm lg:text-lg lg:text-start  mt-5 py-3 p-2">
              Flazz was established in 1998 with a commitment to revolutionize
              the home moving service industry. Our journey began with a passion
              for providing seamless, stress-free moving experiences for
              individuals and families. Over the years, we have grown steadily,
              expanding our reach and refining our services to cater to the
              diverse needs of our clients Quos!
            </p>
            <button className="border-2 mt-3 border-black p-2 w-max rounded-3xl lg:px-5 font-semibold hover:text-white hover:bg-black bg-[#cdff80]">Learn More </button>
          </div>
          <div className="lg:row-span-1 rounded-2xl border-2 flex flex-col items-center justify-center py-5 bg-[#F5F7F8]">
         
            <p className="text-center px-2 py-auto text-xl font-bold">
              Trust is the backbone of our operations
            </p>
          </div>
          <div className="lg:row-span-3 rounded-2xl border-2 flex flex-col items-center justify-center py-5 bg-[#F5F7F8]">
          
              <Image
                src={svg3}
                priority
                sizes="100vw"
                alt="history"
                className="w-[60px] h[60px]"
              />
            
            <p className="text-center py-auto text-xl font-bold">
            Professionalism, reliability,and integrity.
            </p>
          </div>
          <div className="lg:row-span-3 rounded-2xl border-2 flex flex-col items-center justify-center py-5 bg-[#F5F7F8]">
           
              <Image
                src={svg2}
                priority
                sizes="100vw"
                alt="history"
                className="lg:w-[60px]  w-[30px]"
              />
            
            <p className="text-center py-auto text-xl font-bold">
              Our team is the cornerstone of our success.
            </p>
          </div>
          <div className="lg:row-span-1 px-2 rounded-2xl border-2 flex items-center justify-center py-5 bg-[#F5F7F8]">
            <p className="text-center py-auto text-xl font-bold">Dedicated Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
