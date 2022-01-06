import React from "react";
import { useHistory } from "react-router";
import style from "./detail.module.css";


function Details() {
  const history = useHistory();

  return (
    <div className={style.detailsbody}>
      <div className={style.contentbody}>
        <div className={style.smalldiv}>
          <p className={style.hi}>Hi, I am</p>
          <h1 className={style.name}>Huxly Gerard Singh A</h1>
          <p className={style.fullstack}>
            Full-stack Web Developer | Competitive programmer
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/13hRoQv-iuf7HQ-yzQOk_HsIc54nkw9Z4/view?usp=sharing"
          >
            {" "}
            <button className={style.resume}>RESUME</button>
          </a>
          <div style={{ marginTop: "20px" }}>
            <a target="_blank" href="https://github.com/huxly123">
              <img
                className={style.github}
                src="/github.svg"
                alt="github"
              ></img>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/huxlysingh/">
              <img
                className={style.linkedin}
                src="/linkedin.svg"
                alt="linkedin"
              />
            </a>

            <a target="_blank" href="https://twitter.com/HUXLY2">
              <img className={style.twitter} src="/twitter.gif" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
