"use client";
import React, { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div
      className={`w-full bg-slate-400 block flex-grow lg:flex lg:items-center lg:w-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="text-sm lg:flex-grow">
        <a
          href="#"
          className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
        >
          First Link
        </a>
        <a
          href="#"
          className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
        >
          Second Link
        </a>
        <a
          href="#"
          className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
        >
          Third Link
        </a>
        <a
          href="#"
          className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
        >
          Fourth Link
        </a>
      </div>
      <div>
        <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
          Click Me
        </button>
      </div>
    </div>
  );
}
