export default async function Fetching() {
  const res = await fetch("https://randomuser.me/api/?results=6", {
    method: "GET",
  });

  const user = await res.json();
  console.log(user);

  return (
    <div className="max-w-screen-2xl  overflow-hidden">
      <div className="flex flex-col px-5 h-max  lg:px-10 items-center my-5">
        <h2 className="text-white text-4xl my-3 ">Our Team</h2>
        <div className="grid  lg:grid-cols-3 gap-2 lg:gap-10  justify-center flex-wrap">
          {user.results.map((item: any, index: any) => (
            <div key={index} className="bg-white text-black min-w-[400px] flex flex-col rounded-xl hover:scale-105 duration-200">
              <div className="flex flex-col lg:flex-row items-center gap-2 p-2">
              <img 
                src={item.picture.large}
                key={index}
                width={120}
                alt="pp"
                className="rounded-xl"
                />
                <p>
                  {item.name.first} {item.name.last}
                </p>
                </div>
              <div className="p-3 text-sm  ">
                <p className="border-2 rounded-full px-2 w-max">{item.email}</p>
                <p className="px-2">{item.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
