'use client';

import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import styles from "../styles";
import { Card, TitleText, TypingText } from '../components';
import axios from 'axios';

const Insights = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    axios.get("https://newsapi.org/v2/everything?q=metaverse&pageSize=5&apiKey=06e8bc0cd8ba4f53843572f35d47d6e8")
    .then((res) => {
      console.log(res.data.articles);
      setNews(res.data.articles)
    })
  },[])
  return (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText
        title="| Insights"
        textStyles="text-center"
      />
      <TitleText
        title="Metaverse News"
        textStyles='text-center'
      />
      <div className='mt-[50px] flex flex-col gap-[30px]'>
          {news.map((val, index) => (
            <Card
              key={val.id}
              date={val.publishedAt}
              {...val}
              index={index}/>
          ))}
      </div>
    </motion.div>
  </section>
  )};
  

export default Insights;
