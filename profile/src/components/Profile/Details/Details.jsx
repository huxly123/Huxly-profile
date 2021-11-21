import React from "react";
import { useHistory } from "react-router";
import style from "./detail.module.css";
import { Link } from "react-router-dom";

function Details() {
  const history = useHistory();

  return (
    <div className={style.detailsbody}>
      <div className={style.smalldiv}>
        <p className={style.hi}>Hi, I am</p>
        <h1 className={style.name}>Huxly Gerard Singh A</h1>
        <p className={style.fullstack}>
          Full-stack Web Developer | Competitive programmer
        </p>
        <a href="https://drive.google.com/file/d/1OVKhnL73PMR3KjM_dCkSjSoHbUTHMjuj/view?usp=sharing">
          {" "}
          <button className={style.resume}>RESUME</button>
        </a>
        <div style={{ marginTop: "10px" }}>
          <a href="https://github.com/huxly123">
            <img className={style.github} src="/github.svg"></img>
          </a>

          <a href="https://www.linkedin.com/in/huxlysingh/">
            <img className={style.linkedin} src="/linkedin.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Details;