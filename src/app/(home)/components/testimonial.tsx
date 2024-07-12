import TestCard from "./testi-card";

export default function Testi() {
  return (
    <section className="bg-[#F5F7F8] px-[20px] pb-[150px] py-[50px] flex flex-col items-center  overflow-x-scroll  ">
      <h2 className="text-3xl lg:self-start ] mb-7 pb-3 border-b-2 border-white border-solid  text-black ">
        What Our Clients Say
      </h2>
      <div className="flex px-[50px] justify-around  gap-4 lg:flex-wrap flex-row m-auto">
        <TestCard title="lorem" caption="lorem lsoeeamsd asdsw asleoram sda" />
        <TestCard title="lorem" caption="lorem lsoeeamsd asdsw asleoram sda" />
        <TestCard title="lorem" caption="lorem lsoeeamsd asdsw asleoram sda" />
        <TestCard title="lorem" caption="lorem lsoeeamsd asdsw asleoram sda" />
        <TestCard title="lorem" caption="lorem lsoeeamsd asdsw asleoram sda" />
        <TestCard title="lorem" caption="lorem lsoeeamsd asdsw asleoram sda" />
        <TestCard title="lorem" caption="lorem lsoeeamsd asdsw asleoram sda" />
        <TestCard title="lorem" caption="lorem lsoeeamsd asdsw asleoram sda" />
      </div>
    </section>
  );
}
