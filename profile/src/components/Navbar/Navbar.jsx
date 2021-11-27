import React from "react";
import style from "./navbar.module.css";

function Navbar() {

  const handleabout = () => {
  
}



  return (
    <div className={style.navbody}>
      <div className={style.hs}>HS</div>
      <div className={style.flexx}>
        <a onClick={handleabout} className={style.a1}>Home</a>
        <a className={style.a2}>About</a>
        <a className={style.a3}>Project</a>
        <a className={style.a4}>Skills</a>
        <a className={style.a5}>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
