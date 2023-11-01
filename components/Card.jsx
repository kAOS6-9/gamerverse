'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Card = (val, index) => {
    
    return(
    <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 1)}
        className="flex md:flex-row flex-col gap-4"
    >
        <img src={val.media} alt="newsPic" className="md:w-[270px] w-[full] h-[250px] rounded-[32px] object-cover"/>
        <div className="w-full flex justify-around items-center">
        <a href={val.link}>
            <div className="flex-1 md:ml-[50px] flex-col max-w-[650px]">
                <h4 className="font-bold lg:text-[32px] text-[26px] text-white">{val.title.slice(0,60)}</h4>
                <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">{`${val.summary.slice(0,100)}...`}</p>
                <p className="mt-[16px] font-semibold lg:text-[18px] text-[12px] text-secondary-white underline underline-offset-4">{`${val.published_date.slice(0,10)}`}</p>
            </div>
        </a>
        <a href={val.url}>
            <div className="lg:flex hidden items-center justify-center w-[100px]  h-[100px] rounded-full bg-transparent border-[1px] border-white">
                <img src="arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain"/>
            </div>
        </a>
        </div>
    </motion.div>
)};

export default Card;