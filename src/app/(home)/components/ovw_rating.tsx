export default function Rating({
  heading,
  caption,
  content,
}: {
  heading: string;
  caption: string;
  content: string;
}) {
  return (
   
      <div className="lg:flex-1 text-center p-[20px]  lg:h-full lg:content-center rounded-lg">
        <h2 className="text-[#0d2030] text-2xl lg:text-4xl font-bold">
          {heading}
        </h2>
        <p className="font-semibold mb-4">{caption}</p>
        <p>{content}</p>
      </div>
  
  );
}
