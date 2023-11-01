'use client';

import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import styles from "../styles";
import { Card, TitleText, TypingText } from '../components';
import axios from 'axios';

const Insights = () => {
  const [news, setNews] = useState([])
  var options = {
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: {q: 'metaverse', lang: 'en', sort_by: 'relevancy', page: '1',page_size: '3',topic: 'tech'},
    headers: {
      'x-api-key': '5xLlLEPtO0rL4t1c0oOZQcMOFuImBJZ1PWmEME6bFn8'
    }
  };
  useEffect(() => {
    axios.request(options).then((res) => {
      console.log(res.data.articles)
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
              key={val._id}
              date={val.published_date}
              excerpt={val.excerpt}
              {...val}
              index={index}/>
          ))}
      </div>
    </motion.div>
  </section>
  )};
  

export default Insights;
