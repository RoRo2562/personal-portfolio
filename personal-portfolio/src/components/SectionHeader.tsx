import { twMerge } from "tailwind-merge";

export const SectionHeader = ({
    title,eyebrow,description,className
}:{
    title:string;
    eyebrow:string;
    description:string;
    className?:string;
}) => {
    return (
        <>
        <div className="flex flex-col justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-[#f1faee] to-[#a8dadc] text-transparent bg-clip-text text-center">
                {title}
            </p>
            <h2 className={twMerge("special-font uppercase font-zentry font-black text-4xl sm:right-10 md:text-6xl text-center mt-6 header-text text-[#f5f8ff]",className)}>
                {eyebrow}
            </h2>
            <p className={twMerge("uppercase text-center md:text-xl text-white/60 mt-4 max-w-md mx-auto",className)}>
                {description}
            </p>

        </div>
        </>
    )
}