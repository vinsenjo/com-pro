"use client";

import { useState } from "react";

export default function Track() {
  const [tracker, setTracker] = useState(false);

  return (
    <div className=" bg-white flex my-11 flex-col gap-3 w-max-[500px] border-2 border-[#cdff80] lg:w-[400px] h-max-[300px] py-5 mt-5 rounded-2xl p-3 lg:mx-0 mx-auto">
      <div className="flex rounded-full  border-2 h-[50px]">
        <button
          onClick={() => setTracker(false)}
          className={`text-black duration-300  rounded-3xl  w-1/2 ${
            tracker == false ? "bg-[#0d2030] text-white" : "bg-white"
          }  text-sm`}
        >
          Tracking Package
        </button>
        <button
          onClick={() => setTracker(true)}
          className={`text-black duration-300 rounded-3xl w-1/2 ${
            tracker == true ? "bg-[#0d2030] text-white" : "bg-white"
          } text-sm`}
        >
          Tracking Route
        </button>
      </div>
      <div className=" py-5">
        <input
          type="text"
          placeholder={` ${
            tracker == false ? "ID" : "Current Address"
          } `}
          className="px-3 text-black h-[50px] mb-5 w-full bg-white rounded-full border-2"
        />
        <input
          type="text"
          placeholder={` ${
            tracker == false ? "Tracking Number" : "New Address"
          } `}
          className="px-3 text-black h-[50px] w-full bg-white rounded-full border-2"
        />
      </div>
      <div>
        <button className="text-black w-full font-semibold rounded-3xl h-[50px] hover:bg-[#0d2030] hover:text-[#cdff80] duration-150  bg-[#cdff80] text-sm ">
          Track Shipper
        </button>
      </div>
    </div>
  );
}
