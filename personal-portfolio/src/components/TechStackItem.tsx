import { twMerge } from "tailwind-merge";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import TechIcon from "./TechIcon";

type Direction = "left" | "right"; // Define allowed directions

const TechStackItem = ({
  items,
  className,
  direction = "left", // Default to "left" direction
}: {
  items: { title: string; iconType: string }[];
  className?: string;
  direction?: Direction; // Add a new prop for direction
}) => {
  // Duplicate items to create an infinite loop effect
  const duplicatedItems = [...items, ...items];

  const [ref, { width }] = useMeasure();

  // Motion value for scrolling
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 8;

    // Set the initial position and direction of scrolling
    let targetPosition: number;
    let startPosition: number;



    if (direction === "left") {
      targetPosition = finalPosition; // Scroll left
      startPosition = 0
    } else {
      targetPosition = 0 // Scroll right (start from the end)
      startPosition = finalPosition
    }

    // Animation for scrolling in the specified direction
    controls = animate(xTranslation, [startPosition, targetPosition], {
      ease: 'linear',
      duration: 40,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width, direction]); // Add `direction` as a dependency

  return (
    <div className={twMerge("relative w-full overflow-hidden flex", className)}>
      <motion.div
        ref={ref}
        className="flex gap-4"
        style={{ x: xTranslation }}
      >
        {[...duplicatedItems].map((item, index) => (
          <TechIcon image={item.iconType} title={item.title} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default TechStackItem;
