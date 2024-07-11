import Image from "next/image";
export default function Visi() {
  return (
    <div className="min-h-500px bg-black p-[35px]  lg:p-[100px]">
      <div className="flex flex-col  lg:relative">
        <Image
          src="/assets/dog.jpg"
          alt="Descriptive text for screen readers"
          width={500}
          height={300}
          layout="responsive"
          className="bg-cover rounded-lg"
        />
        <div className="lg:absolute border-2 lg:border-0  p-5 top-24 mt-5 left-5 rounded-lg text-white lg:text-black lg:w-[500px]">
          <h2 className="text-2xl font-bold ">Vision</h2>
          <p className="lg:text-lg py-[10px]">
            Looking ahead, Flazz House Moving aims to expand our reach and set
            new benchmarks in the industry. We aspire to be the preferred choice
            for anyone seeking reliable and cost-effective house moving
            solutions. By staying true to our core values and embracing
            innovation, we are committed to shaping the future of house moving
            services globally.
          </p>
          <h2 className="text-2xl font-bold lg:mt-[60px]">Mission</h2>
          <p className="lg:text-lg py-[10px]">
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
  );
}

// Mission:
// Our mission is to provide superior house moving services that exceed expectations, delivering peace of mind to homeowners and businesses alike. We aim to innovate continuously, embracing new technologies and methodologies to enhance efficiency and minimize environmental impact. With a focus on safety and quality, we are dedicated to ensuring that every relocation project is executed with precision and care.

// Vision:
// Looking ahead, Flazz House Moving aims to expand our reach and set new benchmarks in the industry. We aspire to be the preferred choice for anyone seeking reliable and cost-effective house moving solutions. By staying true to our core values and embracing innovation, we are committed to shaping the future of house moving services globally.

// Core Values:

// Excellence: We strive for excellence in all aspects of our operations.
// Integrity: We conduct business with honesty, transparency, and respect.
// Innovation: We embrace creativity and continuous improvement.
// Safety: We prioritize the safety of our team members, clients, and communities.
// Customer Focus: We are dedicated to exceeding customer expectations.
// Get in Touch:
// Discover why Flazz House Moving is the trusted name in house moving services. Contact us today to discuss your relocation needs and experience the Flazz difference firsthand.
