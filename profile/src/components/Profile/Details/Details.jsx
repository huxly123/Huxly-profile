import React from 'react'
import style from "./detail.module.css"

function Details() {
    return (
      <div className={style.detailsbody}>
        <div className={style.smalldiv}>
          <p className={style.hi}>Hi, I am</p>
          <h1 className={style.name}>Huxly Gerard Singh A</h1>
          <p className={style.fullstack}>Full-stack Web Developer | Competitive programmer</p>
        <button className={style.resume}>RESUME</button>
          <div>
            
        </div>
        </div>


      </div>
    );
}

export default Details
