import React, { useEffect, useState } from "react";
import style from "./project1.module.css"
import img1 from "./Shopper-stop-1.png";
import img2 from "./Shopper-stop-2.png";
import img3 from "./Shopper-stop-3.png";
import img4 from "./Shopper-stop-4.png";
import left from "./left.png"
import right from "./right.png"


const Project1 = () => {
const [current, setCurrent] = useState(0);
const SliderData = [
  {
    id: 0,
    image: img1,
  },
  {
    id: 1,
    image:
     img2
  },
  {
    id: 2,
    image:
     img3
  },
  {
    id: 3,
    image:
    img4
  }
 
  ];
  
  // useEffect(() => {
  //   setInterval(() => {
  //    setCurrent(prev=>prev+1)
  //   },1000)
  // },[])


  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if (!Array.isArray(SliderData) || SliderData.length <= 0) {
  //   return null;
  // }

  return (
    <div className={style.project1body}>
      <div className={style.slider}>
        <img src={left}
          className={style.left_arrow}
          onClick={prevSlide}
        />
        <img src={right}
          className={style.right_arrow}
          onClick={nextSlide}
        />
        {SliderData.map((slide) => {
          return (
            slide.id == current && (
              <div className={style.imageediv} key={slide.id}>
                <img
                  className={style.proimg}
                  src={slide.image}
               alt="img" ></img>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Project1;
