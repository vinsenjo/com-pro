import svg1 from "../home_assets/footprint-line.svg"
import {Feature} from "./feature";


export default function OverView() {
  return (
    <div className="max-w-screen-2xl overflow-hidden">
      <div className=" bg-[#F5F7F8] px-[20px] lg:py-[30px] text-black flex-wrap  flex flex-col  items-center lg:px-[80px] lg:pt-0  ">
        <div className="flex flex-col lg:flex-row gap-5 justify-around pt-[20px]">
          <Feature
            title="History"
            caption="Flazz was established in 1998 with a commitment to revolutionize the home moving service industry. Our journey began with a passion for providing seamless, stress-free moving experiences for individuals and families. Over the years, we have grown steadily, expanding our reach and refining our services to cater to the diverse needs of our clients."
            imgSrc={svg1}
          />
          <Feature
            title="Team"
            caption=" At Flazz, our team is the cornerstone of our success. Comprising
              experienced movers, logistics experts, customer service
              professionals, and dedicated support staff, our team is united by
              a shared commitment to excellence and customer satisfaction. Each
              member brings invaluable expertise and a customer-centric approach
              to ensure every move is executed with precision and care."
              imgSrc={svg1}
              />
          <Feature
            title="Culture"
            caption="Our culture at Flazz is rooted in professionalism, reliability, and integrity. We prioritize open communication and transparency, both within our team and with our clients. We believe in fostering a supportive work environment where teamwork is celebrated, and continuous improvement is encouraged. Respect for our clients' belongings and their trust in us is fundamental to our operations, guiding every aspect of our service delivery."
            imgSrc={svg1}
            />
        </div>
      </div>
    </div>
  );
}



  {/* <div className="flex  items-center flex-col pt-[20px] gap-4 lg:flex-row lg:justify-between lg:items-center border-2 lg:p-[20px] mt-[10px] rounded-xl border-[#235d58]">
    <div className="relative w-1/2">
      <Image
        src="/assets/cewe.jpg"
        alt="girl"
        fill
        className=" p-[5px] rounded-3xl "
      />
    </div>
  
    <div className="chat chat-start flex justify-center lg:justify-end">
      <div className=" chat-bubble p-[10px] lg:p-[50px] bg-[#235d58] text-white lg:text-lg">
        Welcome to Flazz, your trusted partner for all your home moving
        needs. We understand the significance of moving homes in your
        life, and at Flazz, we&apos;re committed to providing safe,
        efficient, and reliable services. With years of experience, we
        offer tailored solutions to cater to your specific requirements,
        including packing, transportation, and setup at your new
        destination. Our trained professionals and state-of-the-art
        equipment ensure a smooth and stress-free moving process. Our
        dedication lies in delivering high-quality services at competitive
        prices. Your trust is our top priority, and we&apos;re here to
        make your moving journey seamless and satisfying.
      </div>
    </div>
  </div> */}