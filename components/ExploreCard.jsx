'use client';

import { motion } from "framer-motion";
import { fadeIn } from '../utils/motion';
import styles from '../styles';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 1.75)}
    className={`relative ${ active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onHoverStart={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px] drop-shadow-lg"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    )
    :
    (
      <div className="absolute bottom-0 p-8 justify-start flex-col w-full bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px] `}>
          <img
            src="/play.png"
            alt="play"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal text-[16px] text-white uppercase leading-[20px] mt-[20px]">
          Enter the Gamerverse
        </p>
        <h2 className="mt-[18px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )
    }
  </motion.div>
);

export default ExploreCard;
