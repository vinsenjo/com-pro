import svg1 from "../../home_assets/footprint-line.svg";
import svg2 from "../../home_assets/team.svg";
import svg3 from "../../home_assets/culture-svgrepo-com.svg";
import cewe from "../../../../public/assets/cewe.jpg";
import { Feature } from "./feature";
import Image from "next/image";
import Rating from "./ovw_rating";

export default function OverView() {
  return (
    <div className="max-w-screen-2xl overflow-hidden ">
      <div className=" bg-white mx-5 rounded-xl  py-[20px]  lg:py-[30px] lg:flex-row text-black flex-wrap lg:justify-between  flex flex-col  items-center lg:px-[80px] lg:pt-0  ">
        <div className="lg:w-2/5 border-2 border-[#cdff80] rounded-3xl">
          <Image
            src={cewe}
            sizes="100vw"
            alt="cewe"
            className="w-[1000px] rounded-3xl p-3 "
          />
        </div>
        <div className="text-black lg:w-2/4 lg:gap-10 grid grid-cols-2 grid-rows-2 min-h-[500px] h-[500px] items-center gap lg:py-0 py-5 ">
          <Rating
            heading="15000+"
            caption="Customer Trust"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas, vel!"
          />
          <Rating
            heading="26+Yrs"
            caption="of Exelence"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas, vel!"
          />
          <Rating
            heading="99,9%"
            caption="Customer Satisfaction"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas, vel!"
          />
          <Rating
            heading="12"
            caption="Global Offices"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas, vel!"
          />
        </div>
      </div>
      {/* <div className="mx-5 px-[20px] flex flex-col lg:flex-row gap-14  text-black lg:mx-20 rounded-xl  py-[20px] bg-gradient-to-r text from-[#e1ece8] to-[#f1eedd]">
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
      </div> */}
    </div>
  );
}
