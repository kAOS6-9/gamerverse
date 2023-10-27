'use client';

import { motion } from 'framer-motion';
import { slideIn, fadeIn, staggerContainer, textVariant } from "../utils/motion";
import styles from "../styles";
import { TypingText } from '../components';


const About = () => (
  <section id='about' className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col mt-[10px] md:mt-[20px]`}
    >
      <TypingText title="| About Gamerverse" textStyles="text-center"/>
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-secondary-white text-center'
      >
        We believe that gaming is more than just a pastime. it's a culture, a lifestyle, and a shared passion. Join us as we delve into the depths of virtual worlds, explore the frontiers of technology, and uncover the stories that define this ever-evolving realm. <br /> <span className='font-extrabold text-white'>GAMERVERSE – where games come to life, and players come together.</span>
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'spring', 0.5, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[18px] object-contain mt-[28px]'  
      />
    </motion.div>
  </section>
);

export default About;
