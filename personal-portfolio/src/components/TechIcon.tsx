import { twMerge } from "tailwind-merge";

const TechIcon = ({ image,title, className }: { image: string;title:string; className?: string }) => {
  return (
    <div
      className={twMerge('inline-flex items-center gap-4 py-2 px-8 outline-2 outline-white/10 rounded-lg justify-center',className)}
    >
      <img src={image} className="size-10" alt="" />
      <span className="font-semibold">{title}</span>
    </div>
  );
};

export default TechIcon;