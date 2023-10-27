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
    axios.get("https://newsdata.io/api/1/news?apikey=pub_31952dfaa7698fdba39b8f085c4819a8014a3&q=video%20games&language=en&category=technology&size=3")
    .then((res) => {
      console.log(res.data.results);
      setNews(res.data.results)
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
        title="Gaming News"
        textStyles='text-center'
      />
      <div className='mt-[50px] flex flex-col gap-[30px]'>
          {news.map((val, index) => (
            <Card
              key={val.article_id}
              date={val.pubDate}
              {...val}
              index={index}/>
          ))}
      </div>
    </motion.div>
  </section>
  )};
  

export default Insights;
