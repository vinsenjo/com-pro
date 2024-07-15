import ServiceHero from "./components/hero";
import Local from "./components/local";
import Long from "./components/long";
import Small from "./components/small";

export default function Page() {
  return (
    <div className=" bg-white">
      <ServiceHero />
      <Small />
      <Local />
      <Long />
    </div>
  );
}
