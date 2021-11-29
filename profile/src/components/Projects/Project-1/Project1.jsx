import React from 'react'
import style from "./project1.module.css"

function Project1() {
    return (
      <div className={style.projectbody}>
        <div className={style.contentbody}>
          <div className={style.imgdiv}>
            <img src="/pro-caddy.png"></img>
          </div>

          <div className={style.contentdiv}>
            <h2 className={style.h2} style={{ left: "0px" }}>Caddy cool</h2>
            <p>
              Caddy cool is a Diabetes Management mobile website used to track
              the pills to take daily and join various groups to get information
              and allow to join the various contests.
            </p>

            <h4 className={style.h4}>Tech stack:</h4>

            <p>React | CSS | JvaScript | MongoDB |Express |NodeJs</p>
            <span className={style.span}>
              <a href="">
                <img style={{ width: "30px" }} src="/github.svg"></img>
              </a>
              <a href="">
                <img style={{ width: "27px",marginLeft:"10%" }} src="/server.png"></img>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
}

export default Project1
