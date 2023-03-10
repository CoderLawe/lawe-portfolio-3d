import React from 'react'
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from '../style';
import { services } from "../constants";
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

function ServiceCard({index, title, icon}) {
  console.log("title", title)
  return (
    <Tilt className="xs:w-[250px]">
      <motion.div
      variants={fadeIn("right","spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
            <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>

    </Tilt>
    )
}

const About = () => {
  return (
      <>
        <motion.div>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
        <motion.p
        variants={fadeIn ("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        > 
My name is Lawe Sosah and I specialize in building fully responsive, dynamic websites that provide an intuitive user experience. My experience with React.js and Next.js has enabled me to create feature-rich websites and apps that are optimized for performance and compatibility. Additionally, my experience with Django allows me to create secure, maintainable applications.


        </motion.p>

        <div className="flex mt-20 flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} title={service.title} index={index} {...services} icon={service.icon}/>
          ))}
        </div>
      </>
    )
}

// export default About
export default SectionWrapper(About, "about")