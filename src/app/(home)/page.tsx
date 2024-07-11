import OverView from "./components/overview";
import Hero from "./components/hero";
import Service from "./components/service";
import Testi from "./components/testimonial";
import Carausel from "./components/carauselSection";
import HomeHero from "./components/homeHero";

export default function Home() {
  return (
    <div className=" bg-white items-center ">
      <HomeHero />

      <OverView />
      <Service />
      {/* <Carausel /> */}
      <Testi />
    </div>
  );
}
