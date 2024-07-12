import svg1 from "../../home_assets/footprint-line.svg";
import svg2 from "../../home_assets/team.svg";
import svg3 from "../../home_assets/culture-svgrepo-com.svg";
import cewe from "../../../../public/assets/cewe.jpg";
import { Feature } from "./feature";
import Image from "next/image";

export default function OverView() {
  return (
    <div className="max-w-screen-2xl overflow-hidden">
      <div className=" bg-[#F5F7F8] px-[20px] lg:py-[30px] text-black flex-wrap  flex flex-col  items-center lg:px-[80px] lg:pt-0  ">
        <div className="flex flex-col lg:flex-row justify-between gap-5 mt-5">
          <div>
            <Image
              src={cewe}
              sizes="100vw"
              alt="cewe"
              className="w-[1000px] rounded-xl"
            />
          </div>
          <div className="bg-[#235d58] flex items-center py-5  text-white px-14 rounded-xl">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              suscipit consequuntur impedit, molestiae eaque ab saepe
              perspiciatis deserunt omnis at minus voluptate obcaecati optio
              reprehenderit asperiores incidunt itaque velit consectetur
              adipisci ratione. Accusantium quidem voluptate repellendus aperiam
              sapiente, quisquam aut, dolorem repellat, numquam error cum!
              Perspiciatis sequi libero commodi culpa.
              <div className="flex pt-10 justify-center gap-2 ">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold">15000+</h2>
                  <p className="text-sm">Customer <br /> Trust</p>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold">26+Yrs</h2>
                  <p className="text-sm">of Exelence</p>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold">99%</h2>
                  <p className="text-sm">Customer Satisfaction</p>
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-14 mx-auto pt-[20px]">
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
