import React from 'react'
import { motion } from "framer-motion";

import { styles } from "../style"
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

import { experiences } from '../constants';

const ExperienceCard = ({experience}) => {

  return(

  
  <VerticalTimelineElement
  contentStyle={{background:"#1d1836", color:"#fff"}}
  contentArrowStyle={{borderRight: '7px solid #232631'}}
  date={experience.date}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img className="w-[60%] h-[60%] cursor-pointer object-contain" src={experience.icon} alt={experience.company_name}/>
    </div>
  }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>{experience.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">{
    experience.points.map((point, index) => (
      <li key={`experience-point${index}`}
        className="text-white text-[14px] pl-1 tracking-wider"
      >
        {point}
      </li>
    ))}</ul>
 
  </VerticalTimelineElement>
  )
}

const Experience = () => {
  console.log("experiences", experiences)
  return (
      <>
        <motion.div
        variants={textVariant()}
        >
           <p className={styles.sectionSubText}>What I've done so far</p>
          <h2 className={styles.sectionHeadText}>My projects.</h2>

        </motion.div>

        <div className="mt-20 flex flex-col">

          <VerticalTimeline>
            {experiences.map((experience, index) =>(
              // <h1 className="text-red text-[148px]">hello there{experience.company_name}</h1>
              <ExperienceCard  key={index} experience={experience}/>
            ))}
          </VerticalTimeline>

        </div>
      </>
    )
}

export default SectionWrapper(Experience, "work")