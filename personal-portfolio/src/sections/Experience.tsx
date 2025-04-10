import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion'
import { experiences, ExperienceType } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper"
import { textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";
import { SectionHeader } from '../components/SectionHeader';

const ExperienceCard = ({ experience }:{experience:ExperienceType}) => {
  return (
    <VerticalTimelineElement className='text-[#f5f8ff]'
      contentStyle={{
        background: 'rgba(69, 123, 157, 0.4)', /* 40% opacity */
        color: '#f5f8ff',
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[80%] h-[80%] object-contain text-[#f5f8ff]'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[#f5f8ff] text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index:number) => (
          <li
            key={`experience-point-${index}`}
            className='text-[#f5f8ff] text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant(0.7)} className='text-[#f5f8ff]'>
        <SectionHeader title='My professional Journey' eyebrow='Work Experience' description=''/>
    </motion.div>
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {
          experiences.map((experience,index) =>(
            <ExperienceCard key={index} experience={experience}/>
          ))
        }
      </VerticalTimeline>
        
    </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")