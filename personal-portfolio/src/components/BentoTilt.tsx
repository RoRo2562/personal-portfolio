import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface BentoTiltProps {
    children: React.ReactNode;
    className?: string;
  }

export const BentoTilt: React.FC<BentoTiltProps> = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef<HTMLDivElement | null>(null);
  
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!itemRef.current) return;
  
      const { left, top, width, height } =
        itemRef.current.getBoundingClientRect();
  
      const relativeX = (event.clientX - left) / width;
      const relativeY = (event.clientY - top) / height;
  
      const tiltX = (relativeY - 0.5) * 5;
      const tiltY = (relativeX - 0.5) * -5;
  
      const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
      setTransformStyle(newTransform);
    };
  
    const handleMouseLeave = () => {
      setTransformStyle("");
    };
  
    return (
      <div
        ref={itemRef}
        className={twMerge(className,'bg-[#457b9d]/40 rounded-md relative z-0 overflow-hidden border border-white/20 p-0 transition-transform duration-300 ease-out')}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle }}
      >
        {children}
      </div>
    );
  };