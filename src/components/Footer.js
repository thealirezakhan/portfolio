import React from 'react'
import style from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <div className={style.footer}>

            <div className={style.left}>
                <div className={style.text1}>Find me on: </div><div className={style.line1}></div>

                <div className={style.insta}><Link target=' ' to={"https://www.instagram.com/thealirezakhan/"}>
                <FontAwesomeIcon to={"https://www.instagram.com/thealirezakhan/"} icon={faInstagram} /></Link>
                    </div><div className={style.line2}></div>
                <div className={style.linked}><Link target=' ' to={"https://www.linkedin.com/in/thealirezakhan/"}><FontAwesomeIcon icon={faLinkedin} /></Link></div><div className={style.line3}></div>
            </div>
            <div className={style.right}>
                <div className={style.line4}></div>
                <div className={style.git}><Link target=' ' to={"https://github.com/thealirezakhan"}>@thealirezakhan<FontAwesomeIcon icon={faGithub} transform=" right-5" /></Link></div>
                <div className={style.git2}><Link target=' ' to={"https://github.com/thealirezakhan"}><FontAwesomeIcon icon={faGithub}  /></Link></div>
            </div>
            
        </div>  
    </>
  )
}

export default Footer