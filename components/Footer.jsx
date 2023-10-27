'use client';

import { motion } from "framer-motion";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";
import styles from "../styles";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient"/>
    <div className="flex flex-col">
      <div className="mb-[50px] h-[2px] bg-white opacity-10"/>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h4 className="font-extrabold text-[24px] text-white">Gamerverse</h4>
        <p className="font-normal text-[14px] text-white opacity-50">Copyright © 2023 - 2024 Gamerverse. All rights reserved.</p>
        <div className="flex gap-4">
          {socials.map((social) => (
            <a href={social.url}>
              <img
                key={social.name}
                src={social.icon}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </div>

  </motion.footer>
);

export default Footer;
