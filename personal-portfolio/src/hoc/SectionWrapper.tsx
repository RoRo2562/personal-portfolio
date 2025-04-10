import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = <T extends React.ComponentType<any>>(Component:T, idName:string) =>
  function HOC(props: React.ComponentProps<T>) {
    return (
      <motion.section
        variants={staggerContainer(2,0.7)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='px-0 2xl:px-60 py-10 2xl:py-16 max-w-full mx-auto relative z-0'
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component {...props}/>
      </motion.section>
    );
  };

export default SectionWrapper;