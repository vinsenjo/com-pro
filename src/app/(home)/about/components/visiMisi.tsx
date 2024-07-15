import Image from "next/image";
export default function Visi() {
  return (
    <div className="max-w-screen-2xl  overflow-hidden">
    <div className="min-h-500px bg-[#0d2030] mt-2 lg:py-0  px-2 lg:px-[50px]">
      <div className="flex flex-col  lg:relative">
        <Image
          src="/assets/dog.jpg"
          alt="Descriptive text for screen readers"
          width={500}
          height={300}
          layout="responsive"
          className="bg-cover rounded-xl"
        />
        <div className="lg:absolute border-2 lg:border-0  p-5 top-12 mt-5 left-5 rounded-xl lg:text-black lg:w-[500px]">
          <h2 className="text-2xl font-bold  ">Vision</h2>
          <p className="lg:text-lg lg:p-5 py-2 lg:bg-black/10 lg:backdrop-blur-sm rounded-xl">
            Looking ahead, Flazz House Moving aims to expand our reach and set
            new benchmarks in the industry. We aspire to be the preferred choice
            for anyone seeking reliable and cost-effective house moving
            solutions. By staying true to our core values and embracing
            innovation, we are committed to shaping the future of house moving
            services globally.
          </p>
          <h2 className="text-2xl font-bold lg:mt-[60px] mt-[10px]">Mission</h2>
          <p className="lg:text-lg  rounded-xl lg:bg-black/10 lg:backdrop-blur-sm lg:p-5 py-2">
            Our mission is to provide superior house moving services that exceed
            expectations, delivering peace of mind to homeowners and businesses
            alike. We aim to innovate continuously, embracing new technologies
            and methodologies to enhance efficiency and minimize environmental
            impact. With a focus on safety and quality, we are dedicated to
            ensuring that every relocation project is executed with precision
            and care.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}