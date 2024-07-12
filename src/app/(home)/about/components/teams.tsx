import Image from "next/image";
export default function TeamsAbout() {
  return (
    <div className="bg-white px-[80px] text-black  font-bold">
      <h2 className="text-3xl">Our Teams</h2>
      <div className="w-[250px] h-[300px] bg-gray-500 ">
        <Image src='fsaf' width={200} height={200} alt="das" />
        <h3>Name</h3>
        <p>Jabatan</p>
      </div>
    </div>
  );
}
