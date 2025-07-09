import React from "react";
import style from "../Styles/main.module.css";
const Main = () => {
  return (
    <div>
      <div className={style.section1}>
        <div className={style.img}>
          <div className={style.nav}>
            <div className={style.logo}>
              {/* <img src="images/image (12).svg" alt="logo" /> */}
              <span className={style.head}>luminious labs</span>
            </div>
            <div className={style.menu}>
              <span>Technology</span>
              <span>Company</span>
              <span>Commercials</span>
              <span>Blog</span>
              <span>Pop-up Store</span>
              <span>Shop</span>
            </div>
            <div className={style.cart}>
              <span>Cart</span>
              <span className={style.icon}>
                <i class="ri-shopping-bag-line"></i>
              </span>
            </div>
          </div>
          <div className={style.hero}>
            <h6>Red Light Therapy: proven,safe, and non-invasive</h6>
            <h1>Your cells, supercharged</h1>
          </div>
        </div>
      </div>
      <div className={style.section2}>
        <h5>In 2050, material wealth will not be</h5>
        <h6>
          impressive. Your VO2Max, <img src="images/nearSpeed1.webp" alt="" />{" "}
          speed of aging <br />
          HRV <img src="images/hrv2.webp" alt="" /> and body fat percentage{" "}
          <img src="images/will3.webp" alt="" /> will be.
        </h6>
      </div>
      
    </div>
  );
};

export default Main;
