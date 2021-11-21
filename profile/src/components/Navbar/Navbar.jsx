import React from "react";
import style from "./navbar.module.css";

function Navbar() {
  return (
    <div className={style.navbody}>
      <div className={style.hs}>HS</div>
      <div className={style.flexx}>
        <a className={style.a1}>About</a>
        <a className={style.a2}>Skills</a>
        <a className={style.a3}>Project</a>
        <a className={style.a4}>Blogs</a>
        <a className={style.a5}>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
