import React, { useContext } from "react";
import style from "./navbar.module.css";

function Navbar() {





  return (
    <div className={style.navbody} id="home">
      <div className={style.hs}>HS</div>
      <div className={style.flexx}>
        <a href="#home" className={style.a1}>
          Home
        </a>
        <a href="#about" className={style.a2}>
          About
        </a>
        <a href="#project" className={style.a3}>
          Project
        </a>
        <a href="#skills" className={style.a4}>
          Skills
        </a>
        <a href="#contact" className={style.a5}>
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
