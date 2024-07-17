import TestCard from "./testi-card";

export default function Testi() {
  return (
    <div className="max-w-screen-2xl  overflow-hidden text-black">
      <section className="bg-black/10 backdrop-blur-10 rounded-xl mb-[20px] mx-[20px] px-[20px]  py-[50px] flex flex-col items-center  overflow-x-scroll  ">
        <h2 className="text-3xl lg:self-start mb-5 pb-3 border-b-2 border-white border-solid  text-black ">
          What Our Clients Say
        </h2>
        <div className="flex  lg:grid lg:grid-cols-3  lg:gap-5 px-[50px] justify-around  gap-4 lg:flex-wrap flex-row m-auto">
          <TestCard
            title="Nelson A."
            move="Moved from Shelby Township, MI to Raritan, NJ"
            caption="Overall experience was great. We received proactive communication throughout the entire process which kept us up-to-date and our minds at ease. Everything was picked up and arrived on-time. The entire team, from start to finish, were very professional, knowledgeable, and helpful."
          />
          <TestCard
            title="Jillian B."
            move="Moved from Austin, TX to Denver, CO"
            caption="Our experience throughout the entire process was exceptional! From the initial inquiry for information and pricing to the professional staff who showed up to load, everyone was extremely pleasant and helpful. The online process was easy and they were always available to help with questions. Well done, 5 stars!"
          />
          <TestCard
            title="Chris C."
            move="Moved from Rochester, NY to New Smyrna Beach, FL"
            caption="From start to finish the experience was great. Attention to detail, follow up and care of our household belongings was exceptional. Communication was excellent at every step too. That includes the meeting to evaluate the furniture being moved, quotes, details needed to be addressed, coordination of moving trucks, and finally the owner operator who transported our items."
          />
          {/* belum di edit */}
          {/* <TestCard
            title="Chris C."
            move="Moved from Rochester, NY to New Smyrna Beach, FL"
            caption="From start to finish the experience was great. Attention to detail, follow up and care of our household belongings was exceptional. Communication was excellent at every step too. That includes the meeting to evaluate the furniture being moved, quotes, details needed to be addressed, coordination of moving trucks, and finally the owner operator who transported our items."
          />
          <TestCard
            title="Chris C."
            move="Moved from Rochester, NY to New Smyrna Beach, FL"
            caption="From start to finish the experience was great. Attention to detail, follow up and care of our household belongings was exceptional. Communication was excellent at every step too. That includes the meeting to evaluate the furniture being moved, quotes, details needed to be addressed, coordination of moving trucks, and finally the owner operator who transported our items."
          />
          <TestCard
            title="Chris C."
            move="Moved from Rochester, NY to New Smyrna Beach, FL"
            caption="From start to finish the experience was great. Attention to detail, follow up and care of our household belongings was exceptional. Communication was excellent at every step too. That includes the meeting to evaluate the furniture being moved, quotes, details needed to be addressed, coordination of moving trucks, and finally the owner operator who transported our items."
          /> */}
       
        </div>
      </section>
    </div>
  );
}
