interface IProps {
  title: string;
  caption: string;
}

export default function TestCard({ title, caption }: IProps) {
  return (
    <div className="text-black h-max w-max  bg-white group hover:scale-105  p-[30px] rounded-lg hover:shadow-lg  duration-200">
      <svg className="text-[#235d58]"
        xmlns="http://www.w3.org/2000/svg"
        width="1.19em"
        height="1em"
        viewBox="0 0 1664 1408"
      >
        <path
          fill="currentColor"
          d="M768 832v384q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V512q0-104 40.5-198.5T150 150T313.5 40.5T512 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136m896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136V512q0-104 40.5-198.5T1046 150t163.5-109.5T1408 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136"
        />
      </svg>
      <h3 className="duration-200 font-bold group-hover:scale-105 text-md du lg:text-xl py-[10px] ">{title}</h3>
      <p className="text-sm duration-200 group-hover:scale-105 ">{caption}</p>
    </div>
  );
}
