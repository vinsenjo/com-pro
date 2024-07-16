import Image from "next/image";
import img1 from "../../../../../public/assets/van.jpg";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

interface IProps {
  name: string;
  desc1: any;
  desc2: any;
  desc3: any;
  imgSrc: string;
}

// interface IContent {
//   content : INode[];
// }

// interface INode {
//   nodeType : string;
// }

// interface IDesc {
//   nodeType: string,
//   data: {},
//   content: { nodeType: string, data: {}, content: [] }[],
  
// }

export default function ServiceFetch({
  name,
  desc1,
  desc2,
  desc3,
  imgSrc,
}: IProps) {
  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-xl lg:text-2xl border-b-2 border-[#cdff80] my-1">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-base font-bold lg:text-2xl">{children}</h2>
      ),
    },
  };
  

  return (
    <div className="max-w-screen-2xl  overflow-hidden">
      <div className="mx-5 my-5 text-black">
        <h1 className="text-5xl">{name}</h1>
        <section className="flex lg:flex-row flex-col  gap-2  ">
          <div className="lg:w-1/2 text-white bg-[#0d2030] rounded-2xl flex flex-col  gap-3 py-10 px-5">
            {documentToReactComponents(desc1, options)}
            {documentToReactComponents(desc2, options)}
          </div>

          <div className="bg-white  rounded-2xl  relative">
            <Image
              src={imgSrc}
              priority
              width={750}
              height={200}
              alt=" local moving"
              className="lg:rounded-2xl rounded-t-xl"
            />
            <p className="mt-5 lg:mt-0 w-max mx-5 border-2 text-base block lg:absolute px-5 lg:mx-10 top-3 text-center border-black rounded-2xl text-black ">
              Snapmoves
            </p>
            <div className="text-black flex flex-col lg:absolute lg:mx-10 p-5 lg:text-black lg:top-[65%]   rounded-2xl lg:bg-white/40 lg:backdrop-blur-sm">
              {documentToReactComponents(desc3, options)}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
