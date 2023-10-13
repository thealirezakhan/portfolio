import React, { useRef } from 'react';
import style from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import {useState} from 'react';


export const Navbar = () => {
  
  const panRef = useRef();
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("isactive");
    panRef.current.classList.toggle("is-active");
    console.log("chal raha")
  }
  return (
    <>

    

    <div className={style.box}>
      <nav className={style.navbar}>
        <div className={style.menu}>
          <div className={style.logo}>Ali Reza Khan</div>
            <ul>
            <div className={style.line1}></div>
              <li className={style.menubtn}><NavLink to={"/"} >_Home</NavLink></li><div className={style.line2}></div>
              <li className={style.menubtn}><NavLink to={"/About"}>_About_Me</NavLink></li><div className={style.line3}></div>
              <li className={style.menubtn}><NavLink  to={"/Projects"}>_Projects</NavLink></li><div className={style.line4}></div>
            </ul>
        </div>
        <div className={style.con}>
          
          <div className={style.line5}></div>
            <div className={style.hamburger} ref={navRef} onClick={showNavbar}  >
              <div className={style.bar}></div>
            </div>
          <li className={style.menubtn}><NavLink to={"/Contact"}>_Contact</NavLink></li>
          <div   className={style.line6}></div>
          </div>

          <div className={style.navpanel} ref={panRef}>
            <ul>
                <li className={style.nmenubtn}><NavLink to={"/"} >_Home</NavLink></li>
                <li className={style.nmenubtn}><NavLink to={"/About"}>_About_Me</NavLink></li>
                <li className={style.nmenubtn}><NavLink  to={"/Projects"}>_Projects</NavLink></li>
                <li className={style.nmenubtn}><NavLink  to={"/Contact"}>_Contact</NavLink></li>
              </ul>
          </div>
      </nav>
    </div>
  </> 
 
  
  )
}




    




export default Navbar;