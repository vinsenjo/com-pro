interface Prop {
  title: string;
  number: string;
}

export function Point({ title, number }: Prop) {
  return (
    <div className="  text-center justify-center flex flex-col mt-[70px] py-[10px]">
      <p className="font-extrabold text-lg lg:text-2xl ">{title}</p>
      <p className="text-xs lg:text-lg text-bold">{number}</p>
    </div>
  );
}
