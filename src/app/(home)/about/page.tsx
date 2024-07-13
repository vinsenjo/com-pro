import Fetching from "@/app/data_team/data";
import AboutUs from "./components/aboutUs";
import Culture from "./components/culture";
import TeamsAbout from "./components/teams";
import Visi from "./components/visiMisi";

export default function About() {
  return (
    <div className="bg-white min-h-screen  pt-20">
      <AboutUs />
      <Visi />
      <Culture />
     
      <Fetching/>
    </div>
  );
}
