import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge"

const Card = ({className,children}:PropsWithChildren<{className?:string;}>) => {

  return (
    <div className={twMerge("relative size-full",className)}>
        <div className="absolute inset-0 -z-10 opacity-5" style={{backgroundImage: ``}}>

        </div>
        {children}
    </div>
  )
}

export default Card