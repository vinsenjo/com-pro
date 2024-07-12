
'use client'
import {motion} from "framer-motion"
import Image from "next/image";
export default function Culture() {
  return (
    <section className="flex flex-col gap-5 md:px-[100px] text-black mt-[20px] p-[30px]">
      <div 
            className="flex  flex-col md:flex-row md:justify-around md:items-center md:gap-20 px-[5px] gap-5 ">
        <div className="md:flex-initial md:w-1/2">
          <Image
            src="/assets/hand.jpg"
            width={600}
            height={500}
            layout="responsive"
            alt="Picture of the author"
            className="rounded-lg "
          />
        </div>
        <motion.div initial={{ translateX: 100, opacity: 0 }}  whileInView={{ opacity: 1, translateX: 0 }} className="duration-300 md:flex-initial md:w-1/2  bg-[#F5F7F8] md:px-[50px] md:p-[30px] p-[20px] rounded-lg">
          <h3 className="font-bold text-2xl pb-3">Our Story</h3>
          <p className="text-justify">
            Founded in 1998, Flazz House Moving has been a pioneer in the house
            moving industry, serving clients across the nation with unparalleled
            expertise and dedication. Our journey began with a vision to
            revolutionize the concept of relocating homes, offering innovative
            solutions that ensure safety, efficiency, and reliability. Over the
            years, Flazz has grown from a local operation into a nationally
            recognized leader in the field, thanks to our commitment to
            excellence and customer satisfaction
          </p>
        </motion.div>
      </div>
      <div className="pt-[20px]   flex flex-col md:flex-row md:justify-around md:gap-20 md:items-center px-[5px] gap-5">
        <div className="md:flex-initial md:w-1/2 hidden md:block bg-[#F5F7F8] md:px-[50px] md:p-[30px] p-[20px] rounded-lg">
          <h3 className="font-bold text-2xl pb-3">Our Culture</h3>
          <p className="text-justify">
            At Flazz House Moving, our culture is deeply rooted in integrity,
            teamwork, and continuous improvement. We believe in fostering a work
            environment where every team member is valued and empowered to
            contribute their best. Our success is built on a foundation of trust
            and transparency, both with our clients and within our team. We
            strive to uphold the highest standards of professionalism and
            ethical conduct in everything we do.
          </p>
        </div>
        <div className="md:flex-initial md:w-1/2">
          <Image
            src="/assets/couple_2.jpg"
            width={600}
            height={500}
            alt="Picture of the author"
            className="rounded-lg "
          />
        </div>
        <div className="md:flex-initial md:w-1/2 block md:hidden bg-[#F5F7F8] md:px-[50px] md:p-[30px] p-[20px] rounded-lg">
          <h3 className="font-bold text-2xl pb-3">Lorem, ipsum.</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quod consectetur iure quidem qui laudantium, tempore
            minus cum delectus exercitationem provident repellat odio? Ea, quod
            nam, ad modi asperiores aperiam delectus facere doloremque ut
            voluptates esse fugiat expedita dolor. Nemo dolorum saepe debitis
            facilis reprehenderit nam commodi quasi aspernatur porro!
          </p>
        </div>
      </div>
    </section>
  );
}
