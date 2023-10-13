import React from 'react'
import style from './Projects.module.css';
import Navbar from "./navbar";
import Footer from './Footer';
import img from '../assets/twm.png'
import img2 from '../assets/webtemp.png'
import img3 from '../assets/ziyarat.png'
import img4 from '../assets/babesitenew.png'
import img5 from '../assets/consult.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBugSlash } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'

export const Projects = () => {
  return (
    <>
    <Navbar/>
    <section className={style.projects}>

        <div className={style.div1}>
          <div className={style.topicon}>
          <FontAwesomeIcon icon={faFolderOpen} />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faBugSlash} />
          </div>
        
        <div className={style.bottomicon}>
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faGear} />
        </div>
        </div>
        <div className={style.div2}>
          <div className={style.folder}><FontAwesomeIcon icon={faAngleDown} transform=" left-6" />MY-REACT-APP</div>
          <div className={style.files}>
          <div className={style.folder1}><FontAwesomeIcon icon={faAngleRight} transform=" left-6"/>node_modules</div>
          <div className={style.folder2}><FontAwesomeIcon icon={faAngleRight} transform=" left-6"/>public</div>
          <div className={style.folder3}><FontAwesomeIcon icon={faAngleRight} transform=" left-6"/>src</div>
          <div className={style.folder4}><FontAwesomeIcon icon={faAngleDown} transform=" left-8"/>components</div>
          <div className={style.files2}>
          <div className={style.file7}><FontAwesomeIcon icon={faJs} style={{color: "#e5d315",}}transform=" left-8" />Navbar.js</div>
          <div className={style.file8}><FontAwesomeIcon icon={faHashtag} style={{color: "#4ca1f0",}}transform=" left-8" />Navbar.module.css</div>
          <div className={style.file5}><FontAwesomeIcon icon={faJs} style={{color: "#e5d315",}}transform=" left-8" />Hero.js</div>
          <div className={style.file6}><FontAwesomeIcon icon={faHashtag} style={{color: "#4ca1f0",}}transform=" left-8" />Hero.module.css</div>
          <div className={style.file1}><FontAwesomeIcon icon={faJs} style={{color: "#e5d315",}}transform=" left-8" />About.js</div>
          <div className={style.file2}><FontAwesomeIcon icon={faHashtag} style={{color: "#4ca1f0",}}transform=" left-8" />About.module.css</div>
          <div className={style.file15}><FontAwesomeIcon icon={faJs} style={{color: "#e5d315",}}transform=" left-8" />Projects.js</div>
          <div className={style.file16}><FontAwesomeIcon icon={faHashtag} style={{color: "#4ca1f0",}}transform=" left-8" />Projects.module.css</div>
          <div className={style.file17}><FontAwesomeIcon icon={faJs} style={{color: "#e5d315",}}transform=" left-8" />Contact.js</div>
          <div className={style.file18}><FontAwesomeIcon icon={faHashtag} style={{color: "#4ca1f0",}}transform=" left-8" />Contact.module.css</div>
          <div className={style.file3}><FontAwesomeIcon icon={faJs} style={{color: "#e5d315",}}transform=" left-8" />Footer.js</div>
          <div className={style.file4}><FontAwesomeIcon icon={faHashtag} style={{color: "#4ca1f0",}}transform=" left-8" />Footer.module.css</div>
          <div className={style.file9}><FontAwesomeIcon icon={faHashtag} style={{color: "#4ca1f0",}}transform=" left-8" />App.css</div>
          <div className={style.file10}><FontAwesomeIcon icon={faJs} style={{color: "#e5d315",}}transform=" left-8" />App.js</div>
          <div className={style.file11}><FontAwesomeIcon icon={faJs} style={{color: "#e5d315",}}transform=" left-8" />index.js</div>
          <div className={style.file12}><FontAwesomeIcon icon={faHashtag} style={{color: "#4ca1f0",}}transform=" left-8" />index.css</div>
          <div className={style.file13}>package-lock.json</div>
          <div className={style.file14}>package.json</div></div>
          </div>
        </div>
        <div className={style.div3}>
          
        </div>
        <div className={style.filename}><h6>Projects.js<pre>    </pre> <FontAwesomeIcon icon={faXmark} /> <div className={style.line}></div></h6></div>

        <div className={style.container}>
            <div className={style.cards}>
            
            <div className={style.card1}>
            <div className={style.title}>Project 1 // <span>Fitness MMA</span></div>
                <div className={style.cont}>
                <div className={style.image}>
                    <img src={img} alt="ad" />
                </div>
                <div className={style.details}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, delectus?</p>
                    <p><span className={style.green}>#HTML</span>  <span className={style.pink}>#CSS</span><span className={style.purple}>#JS</span></p>
                <a href="http://trainwithmirza.in/" target="_blank">
                <button>View</button>
                </a>
                    
                </div>
                </div>
            </div>



            <div className={style.card2}><div className={style.image}>
            <div className={style.title}>Project 2 // <span>Portfolio Website</span></div>
            <div className={style.cont}>
                    <img src={img2} alt="ad" />
                
                    <div className={style.details}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, delectus?</p>
                    <p><span className={style.green}>#HTML</span>  <span className={style.pink}>#CSS</span><span className={style.purple}>#JS</span></p>
                <a href="http://trainwithmirza.in/" target="_blank">
                <button>View</button>
                </a>
                    
                </div></div></div>
                </div>



            <div className={style.card3}><div className={style.image}>
                <div className={style.title}>Project 3 // <span>Az-Zehra Tours</span></div>
                <div className={style.cont}>
                    <img src={img3} alt="ad" />
                
                    <div className={style.details}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, delectus?</p>
                    <p><span className={style.green}>#HTML</span>  <span className={style.pink}>#CSS</span><span className={style.purple}>#JS</span></p>
                <a href="http://trainwithmirza.in/" target="_blank">
                <button>View</button>
                </a>
                    
                </div></div></div></div>



            <div className={style.card4}><div className={style.image}>
                <div className={style.title}>Project 4 // <span>Creative Porfolio Website</span></div>
                <div className={style.cont}>
                    <img src={img4} alt="ad" />
                
                    <div className={style.details}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, delectus?</p>
                    <p><span className={style.green}>#HTML</span>  <span className={style.pink}>#CSS</span><span className={style.purple}>#JS</span></p>
                <a href="http://trainwithmirza.in/" target="_blank">
                <button>View</button>
                </a>
                    
                </div></div></div></div>




            <div className={style.card5}><div className={style.image}>
                <div className={style.title}>Project 5 // <span>Consulting Website</span></div>
                <div className={style.cont}>
                    <img src={img5} alt="ad" />
                
                    <div className={style.details}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, delectus?</p>
                    <p><span className={style.green}>#HTML</span>  <span className={style.pink}>#CSS</span><span className={style.purple}>#JS</span></p>
                <a href="http://trainwithmirza.in/" target="_blank">
                <button>View</button>
                </a>
                    
                </div></div></div></div>
            </div>
        </div>

    </section>
    <Footer/>
    </>
  )
}

export default Projects