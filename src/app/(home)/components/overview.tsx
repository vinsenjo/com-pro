import Image from "next/image";
import logo from "../../../../public/assets/logo.png";
import { Point } from "./point";
import { OverviewCard } from "./overviewComp";

export default function OverView() {
  return (
    <div className="min-h-[550px] bg-[#F5F7F8] px-[20px] pt-[30px] text-black flex-wrap  flex flex-col  items-center lg:px-[150px] lg:pt-0 md:pb-[50px] ">
      <div className="flex flex-col pt-[20px] gap-4 lg:flex-row lg:justify-between lg:items-center border-2 p-[20px] mt-[10px] rounded-xl border-[#235d58]">
        <Image
          src="/assets/cewe.jpg"
          width={400}
          height={500}
          alt="Picture of the author"
          className="   p-[5px] rounded-3xl "
        />
        <div className="chat chat-start lg:flex lg:justify-end">
          <div className="chat-bubble p-[25px] lg:p-[50px] bg-[#235d58] text-white lg:text-lg">
            Welcome to Flazz, your trusted partner for all your home moving
            needs. We understand the significance of moving homes in your life,
            and at Flazz, we're committed to providing safe, efficient, and
            reliable services. With years of experience, we offer tailored
            solutions to cater to your specific requirements, including packing,
            transportation, and setup at your new destination. Our trained
            professionals and state-of-the-art equipment ensure a smooth and
            stress-free moving process. Our dedication lies in delivering
            high-quality services at competitive prices. Your trust is our top
            priority, and we're here to make your moving journey seamless and
            satisfying.
          </div>
        </div>
      </div>
      <div className="py-[50px] flex-wrap justify-between flex gap-5 text-lg lg:px-0">
        <OverviewCard
          title="History"
          caption="Flazz was established in 1998 with a commitment to revolutionize the home moving service industry. Our journey began with a passion for providing seamless, stress-free moving experiences for individuals and families. Over the years, we have grown steadily, expanding our reach and refining our services to cater to the diverse needs of our clients."
          imgSrc="/assets/pabrik.jpeg"
        />
        <div className="bg-white p-7 flex flex-col lg:flex-row gap-5 items-center rounded-xl">
          <Image
            src="/assets/van.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className=" bg-white border-[#235d58] lg:p-[10px] p-[5px] self-center  rounded-3xl border-4"
          />
          <div>
            <h2 className="font-bold text-[#235d58] text-2xl">Team</h2>
            <p className="py-[10px] text-sm  lg:text-lg">
              At Flazz, our team is the cornerstone of our success. Comprising
              experienced movers, logistics experts, customer service
              professionals, and dedicated support staff, our team is united by
              a shared commitment to excellence and customer satisfaction. Each
              member brings invaluable expertise and a customer-centric approach
              to ensure every move is executed with precision and care.
            </p>
          </div>
        </div>

        <OverviewCard
          title="Culture"
          caption="Our culture at Flazz is rooted in professionalism, reliability, and integrity. We prioritize open communication and transparency, both within our team and with our clients. We believe in fostering a supportive work environment where teamwork is celebrated, and continuous improvement is encouraged. Respect for our clients' belongings and their trust in us is fundamental to our operations, guiding every aspect of our service delivery."
          imgSrc="/assets/culture.jpg"
        />
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col md:flex-row items-center justify-around md:justify-center md:gap-10">
  <div className="flex gap-10">
    <Point title="Since" number="1900" />
    <Point title="100" number="City" />
  </div>
  <div className="flex gap-10">
    <Point title="+3000" number="Employees" />
    <Point title="5" number="country" />
  </div>
</div> */
}
