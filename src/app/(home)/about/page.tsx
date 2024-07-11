import AboutUs from "./components/aboutUs";
import Culture from "./components/culture";
import Visi from "./components/visiMisi";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <AboutUs />
      <Culture />
      <Visi />
    </div>
  );
}
