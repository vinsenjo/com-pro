// import Fetching from "@/app/data_team/data";
import AboutUs from "./components/aboutUs";
import Culture from "./components/culture";
import Fetching from "@/app/data_team/data";
import Visi from "./components/visiMisi";

export default function About() {
  return (
    <div className="bg-[#0d2030] text-white min-h-screen  ">
      <AboutUs />
      <Visi />
      <Culture />
      <Fetching/>
    </div>
  );
}
