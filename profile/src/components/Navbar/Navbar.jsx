import React from "react";
import style from "./navbar.module.css";

function Navbar() {
  return (
    <div className={style.navbody}>
      <div className={style.hs}>HS</div>
      <div className={style.flexx}>
        <a>About</a>
        <a>Skills</a>
        <a>Project</a>
        <a>Blogs</a>
         <a>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
