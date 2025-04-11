import { twMerge } from "tailwind-merge"


const CardHeader = ({title,description,className}:{title:string,description:string,className?:string}) => {
  return (
    <div className={twMerge("flex flex-col p-4 md:py-8 md:px-10",className)}>
        <div className='inline-flex items-center gap-2'>
            <h3 className='special-font uppercase font-zentry font-black text-3xl sm:right-10 sm:text-3xl md:text-4xl lg:text-5xl text-blue-75'>{title}</h3>
        </div>
        <p className='text-md text-white/60 mt-2'>{description}</p>
    </div>
  )
}

export default CardHeader