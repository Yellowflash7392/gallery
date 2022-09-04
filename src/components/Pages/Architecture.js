import React from "react";
import style from "./Home.module.scss";

export const Architecture = () => {
  return (
    <div>
      <div className={style.today}>
        <div className={style.today_left}>Today
        <p className={style.today_left_date} >Friday, 26 August 2022</p>
        </div>
        <div className={style.today_right}>
         <img className={style.today_right_img}  src="images/img3.png" alt="" />
         <img className={style.today_right_img}  src="images/img1.png" alt="" />
         <img className={style.today_right_img}  src="images/img9.png" alt="" />
         <img className={style.today_right_img}  src="images/img2.png" alt="" />
         <img className={style.today_right_img}  src="images/img5.png" alt="" />
        </div>
      </div>
      <div className={style.this_week}>
        <div className={style.this_week_left}>
          This week
          <p className={style.this_week_left_date} >21 to 25 August 2022</p>
        </div>
        <div className={style.this_week_right}>
          <img className={style.this_week_right_img} src="images/img7.png" alt="" />
          <img className={style.this_week_right_img} src="images/img5.png" alt="" />
          <img className={style.this_week_right_img} src="images/img9.png" alt="" />
          <img className={style.this_week_right_img} src="images/img1.png" alt="" />
          <img className={style.this_week_right_img} src="images/img3.png" alt="" />
          <img className={style.this_week_right_img} src="images/img2.png" alt="" />
          <img className={style.this_week_right_img} src="images/img9.png" alt="" />
          <img className={style.this_week_right_img} src="images/img8.png" alt="" />
          <img className={style.this_week_right_img} src="images/img4.png" alt="" />
        </div>
      </div>
    </div>
  );
};
