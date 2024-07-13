import svg1 from "../../home_assets/footprint-line.svg";
import svg2 from "../../home_assets/team.svg";
import svg3 from "../../home_assets/culture-svgrepo-com.svg";
import cewe from "../../../../public/assets/cewe.jpg";
import { Feature } from "./feature";
import Image from "next/image";

export default function OverView() {
  return (
    <div className="max-w-screen-2xl overflow-hidden ">
      <div className=" bg-[#F5F7F8] mx-5 rounded-xl mt-5 py-[20px]  lg:py-[30px] text-black flex-wrap  flex flex-col  items-center lg:px-[80px] lg:pt-0  ">
        <div className=" flex flex-col px-[20px] lg:flex-row justify-between gap-5 mt-5 ">
          <div className="lg:w-2/5 ">
            <Image
              src={cewe}
              sizes="100vw"
              alt="cewe"
              className="w-[1000px] rounded-xl p-3 border-2 border-[#235d58]"
            />
          </div>
          <div className="text-black  lg:w-2/4 lg:gap-10 grid grid-cols-2 grid-rows-2 gap-5 lg:py-0 py-5 ">
              <div className="lg:flex-1 text-center bg-gradient-to-r from-[#aad3d2] to-[#e2d7a9] p-[20px] h-[100px] lg:h-full lg:content-center rounded-lg">
                <h2 className="text-2xl lg:text-3xl font-bold">15000+</h2>
                <p className="text-sm">
                  Customer Trust
                </p>
              </div>
              <div className="flex-1 text-center bg-gradient-to-r from-[#aad3d2] to-[#e2d7a9] p-[20px] h-[100px] lg:h-full lg:content-center rounded-lg">
                <h2 className="lg:text-3xl text-2xl font-bold">26+Yrs</h2>
                <p className="text-sm">of Exelence</p>
              </div>
              <div className="flex-1 text-center bg-gradient-to-r from-[#aad3d2] to-[#e2d7a9] p-[20px] h-[100px] lg:h-full lg:content-center rounded-lg">
                <h2 className="text-2xl lg:text-3xl font-bold">99%</h2>
                <p className="text-sm">Customer Satisfaction</p>
              </div>
              <div className="flex-1 text-center bg-gradient-to-r from-[#aad3d2] to-[#e2d7a9] p-[20px] h-[100px] lg:h-full lg:content-center rounded-lg">
                <h2 className="text-2xl lg:text-3xl font-bold">99%</h2>
                <p className="text-sm">Customer Satisfaction</p>
              </div>
            </div>
         
        </div>
        <div className="px-[20px] flex flex-col lg:flex-row gap-14 mx-auto pt-[30px]">
          <div>
            <Feature
              title="History"
              caption="Flazz was established in 1998 with a commitment to revolutionize the home moving service industry. Our journey began with a passion for providing seamless, stress-free moving experiences for individuals and families. Over the years, we have grown steadily, expanding our reach and refining our services to cater to the diverse needs of our clients."
              imgSrc={svg1}
            />
          </div>
          <Feature
            title="Team"
            caption=" At Flazz, our team is the cornerstone of our success. Comprising
              experienced movers, logistics experts, customer service
              professionals, and dedicated support staff, our team is united by
              a shared commitment to excellence and customer satisfaction. Each
              member brings invaluable expertise and a customer-centric approach
              to ensure every move is executed with precision and care."
            imgSrc={svg2}
          />
          <Feature
            title="Culture"
            caption="Our culture at Flazz is rooted in professionalism, reliability, and integrity. We prioritize open communication and transparency, both within our team and with our clients. We believe in fostering a supportive work environment where teamwork is celebrated, and continuous improvement is encouraged. Respect for our clients' belongings and their trust in us is fundamental to our operations, guiding every aspect of our service delivery."
            imgSrc={svg3}
          />
        </div>
      </div>
    </div>
  );
}
