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
      <div className={style.section3}>
        <h4>Applications</h4>
        <h1>Start shaping your tomorrow</h1>
        <div className={style.box}>
          <div className={style.card}>
            <div className={style.img}>
              <img src="images/cardimg1.webp" alt="" />
            </div>
            <span>Stay your best self, always</span>
            <div className={style.capsule}>
              <img src="images/image (2).svg" alt="" />
              <span className={style.capsulespan}>Wellbeing</span>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.img}>
              <img src="images/cardimg2.webp" alt="" />
            </div>
            <span>
              Optimize your fertility, cycle <br />
              and menopause naturally
            </span>
            <div className={style.capsule}>
              <img src="images/image (3).svg" alt="" />
              <span className={style.capsulespan}>Women's health</span>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.img}>
              <img src="images/cardimg3.webp" alt="" />
            </div>
            <span>
              Fuel your cells <br />
              for a supercharged life
            </span>
            <div className={style.capsule}>
              <img src="images/image (4).svg" alt="" />
              <span className={style.capsulespan}>Longevity</span>
            </div>
          </div>
        </div>
        <div className={style.button}>
          All Products
          <i class="ri-arrow-right-line"></i>
        </div>
      </div>
      <div className={style.section4}>
        <div className={style.image}>
          <div className={style.text}>
            <h1 className={style.texth1}>
              <span>Meet Kini, </span>
              the first wearable using <br />
              non-invasive light technology <br />
              to support and improve female longevity
            </h1>
          </div>
          <img src="images/watchimage.webp" alt="" />
          <div className={style.tagbar}>
            <span>Get to know Kini now!</span>
            <div className={style.pricebutton}>
              <span> €149,00 </span>
              <div className={style.buynow}>Buy now</div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Main;
