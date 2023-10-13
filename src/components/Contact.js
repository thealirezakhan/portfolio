import React from 'react'
import Navbar from "./navbar";
import Footer from "./Footer";
import style from './Contact.module.css';
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

import { useForm, ValidationError } from '@formspree/react';



export const Contact = () => {
    const [state, handleSubmit] = useForm("mqkvlzkj");
  if (state.succeeded) {
      return (
        <>
        <Navbar/>
        <div className={style.sent}>
            <h1>Thank you ! 🤘</h1><br/>
            <h3>Your message has been accepted. You will recieve answer really soon!</h3>
        </div>
        <Footer/>
        </>
      );
  }
  return (
    <>
    <Navbar/>
        <section className={style.contact}>

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
            <div className={style.div3}></div>
            <div className={style.div4}>
            <h6>Contact.js<pre>    </pre> <FontAwesomeIcon icon={faXmark} /> <div className={style.line}></div></h6>

            <div className={style.container}>
                <div className={style.form}>
                <form onSubmit={handleSubmit}>
                    <label>
                        _Name:</label>
                        <input type="text" name="name" placeholder='_Name' />
                    
                    <label>
                        _Email:</label>
                        <input type="email" name='email' placeholder='_Email'/>
                    <br />
                    <label>
                        _Message:</label>
                        <textarea type="message" name='message' placeholder='Hey! Just checked your website and it looks awesome!' /><br />
                    
                    <button type="submit" value="Submit">Submit</button>
                    </form>
                </div>
            </div>
            </div>


        </section>
    <Footer/>
    </>
  )
}

export default Contact 