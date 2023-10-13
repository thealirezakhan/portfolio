import React from 'react'
import style from './Hero.module.css';
import img from '../assets/snake.png'
import Navbar from "./navbar";
import Footer from './Footer';

export const Hero = () => {
  return (
    <>
    
    <Navbar/>
      <section className={style.hero}>
          
            <div className={style.hleft}>
                <div className={style.text1}>Hi all. I am</div>
                <div className={style.text2}>Ali Reza Khan</div>
                <div className={style.text3}>→ Web developer</div>
                <div className={style.text4}>// Game Feature Coming Soon! 😜</div>
                <div className={style.text5}>// Feel Free to Surf 🏄</div>
            </div>

            <div className={style.hright}>
              <img src={img} alt="snake" srcset="" />
            </div>
        
      </section>
      <Footer/>
    </>
  )
}

