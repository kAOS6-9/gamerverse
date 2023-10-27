'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import styles from "../styles";

const Hero = () => (
  <section className={`${styles.ypaddings} sm:pl-16 pl-6 sm:pr-16 pr-6`}>
    <motion.div 
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: true, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='flex justify-center items-center flex-col relative z-10'>
        <motion.h1 variants={textVariant(1.5)} className={styles.heroHeading}>
          GAMERVERSE
        </motion.h1>
        <motion.div
          variants={textVariant(1.8)}
          className='flex flex-row justify-center items-center mb-2'
        >
          <h1 className={`${styles.heroHeading} drop-shadow-lg`}>MA</h1>
          <div className={`${styles.heroDText} drop-shadow-lg`} />
          <h1 className={`${styles.heroHeading} drop-shadow-lg`}>NESS</h1>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('center', 'spring', 2.3, 2)}
        className='relative w-full md:-mt-[20px] -mt-[12px]'
      >
        <img src="/cover.png" alt="cover" className='w-full h-[350px] sm:h-[500px] object-cover rounded-tl-[70px] rounded-tr-[70px] rounded-br-[70px] rounded-bl-[70px] mt-[30px] relative' />
        <motion.div
          variants={textVariant(2.4)}
          initial={{scale:1}}
          animate={{scale:1.1}}
          transition={{repeat:Infinity, repeatType:'reverse', duration: 1, delay: 1.9}}
          className='relative w-full md:-mt-[20px] -mt-[12px] z-10'
        >
          <a href="#explore">
            <div className='w-full flex justify-center sm:-mt-[110px] -mt-[50px] relative z-10'>
              <img src="/stamp.png" alt="stamp" className='sm:w-[130px] w-[100px] sm:h-[130px] h-[100px] object-contain' />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
