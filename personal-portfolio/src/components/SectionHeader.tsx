export const SectionHeader = ({
    title,eyebrow,description,
}:{
    title:string;
    eyebrow:string;
    description:string;
}) => {
    return (
        <>
        <div className="flex flex-col justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
                {title}
            </p>
            <h2 className="special-font uppercase font-zentry font-black text-4xl sm:right-10 md:text-6xl text-center mt-6 header-text">
                {eyebrow}
            </h2>
            <p className="uppercase text-center md:text-xl text-white/60 mt-4 max-w-md mx-auto">
                {description}
            </p>

        </div>
        </>
    )
}