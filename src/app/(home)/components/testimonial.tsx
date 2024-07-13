import TestCard from "./testi-card";

export default function Testi() {
  return (
    <div className="max-w-screen-2xl  overflow-hidden text-black">
    <section className="bg-[#F5F7F8] rounded-xl mb-[20px] mx-[20px] px-[20px]  py-[50px] flex flex-col items-center  overflow-x-scroll  ">
      <h2 className="text-3xl lg:self-start ] mb-7 pb-3 border-b-2 border-white border-solid  text-black ">
        What Our Clients Say 
      </h2>
      <div className="flex  lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-5 px-[50px] justify-around  gap-4 lg:flex-wrap flex-row m-auto">
        <TestCard title="lorem" caption="Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ratione animi excepturi explicabo nobis atque itaque, rerum fuga
        ullam earum quos." />
        <TestCard title="lorem" caption="lorem lsoeeamsd asdsw asleoram sda" />
        <TestCard title="lorem" caption="lorem lsoeeamsd asdsw asleoram sda" />
        <TestCard title="lorem" caption="lorem lsoeeamsd asdsw asleoram sda" />
        <TestCard title="lorem" caption="lorem lsoeeamsd asdsw asleoram sda" />
        <TestCard title="lorem" caption="lorem lsoeeamsd asdsw asleoram sda" />
        <TestCard title="lorem" caption="lorem lsoeeamsd asdsw asleoram sda" />
        <TestCard title="lorem" caption="lorem lsoeeamsd asdsw asleoram sda" />
      </div>
    </section>
    </div>
  );
}
