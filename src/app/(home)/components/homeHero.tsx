export default function HomeHero() {
  return (
    <div 
      className="hero min-h-screen text-black"
      style={{
        backgroundImage:
          "url(/assets/sofa.jpg",
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-white text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">MOVE WITH JOY</h1>
          <p className="mb-5 lg:text-xl font-semibold">
          "Stay calm and trust the experts. Flazz - Your Easier and Safer
          Solution for Home Moving."
          </p>
          <button className="btn  text-white text-lg bg-[#4535C1]">Download App</button>
        </div>
      </div>
    </div>
  );
}
