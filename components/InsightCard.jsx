'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ( insight, index) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img src={insight.imgUrl} alt="newsPic" className="md:w-[270px] w-[full] h-[250px] rounded-[32px] object-cover"/>
    <div className="w-full flex justify-around items-center">
      <div className="flex-1 md:ml-[50px] flex-col max-w-[650px]">
        <h4 className="font-bold lg:text-[32px] text-[26px] text-white">{insight.title}</h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">{insight.subtitle}</p>
        <p className="mt-[16px] font-normal lg:text-[18px] text-[12px] text-secondary-white py-0.5 px-1">{insight.date}</p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[100px]  h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <img src="arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain"/>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
