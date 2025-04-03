import { twMerge } from "tailwind-merge";

const TechStackItem = ({items,className}:{items:{
    title: string;
    iconType: string;
}[]; className?:string}) => {
  return (
    <div className={twMerge('flex [mask-image:linear-gradient(to-right,transparent,black_10%,black_90%,transparent)]',className)}>
        <div className="flex flex-none py-0.5 gap-6">
        {items.map((item)=>(
            <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-amber-100 rounded-2xl">
                <img src={item.iconType} alt="" />
                <span className="font-semibold">{item.title}</span>
            </div>
        ))}
        </div>
    </div>
  )
}

export default TechStackItem