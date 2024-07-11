import OverView from "../components/overview";

import Service from "../components/service";
import Testi from "../components/testimonial";
import Carausel from "../components/carauselSection";
import HomeHero from "../components/hero";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Marque from "../components/marque";
export default function Home() {
  return (
    <div className=" bg-white items-center ">
      <HomeHero />

      <OverView />
      <Service />
      <Carausel />

      <Testi />
    </div>
  );
}
