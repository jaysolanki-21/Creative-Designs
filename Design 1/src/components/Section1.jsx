import React from "react";
import style from "./section1.module.css";
const Section1 = () => {
  return (
    <div>
      <div className={style.section1}>
        <div className={style.blur}></div>
        <div className={style.section1_left}>
          <h1 className={style.h1}>
            Discover, Collect and Sell Dope Art and NFTS
          </h1>
          <span>
            The world's largest digital marketplace for crypto collections and
            non fungible tokens (NFTS)
          </span>
           <div className={style.section1_button}>
          <div className={style.discover}>Discover</div>
          <div className={style.create}>Create</div>
        </div>
        <div className={style.section1_workinfo}>
          <div className={style.artwork}>
            <h1>27k+</h1>
            <h3>Artwork</h3>
          </div>
          <div className={style.auction}>
            <h1>20k+</h1>
            <h3>Auction</h3>
          </div>
          <div className={style.artist}>
            <h1>7k+</h1>
            <h3>Artist</h3>
          </div>
        </div>
        <div className={style.activeUser}>
          <div className={style.user}>
              <img src="/images/images_1.jpg" alt="" />
              <img src="/images/images_2.jpg" alt="" />
              <img src="/images/images_3.jpg" alt="" />
              <img src="/images/images_4.jpg" alt="" />
               <img src="/images/images_5.jpg" alt="" />
          </div>
          <div className={style.userinfo}>
             <h1>40k+</h1>
             <h3>Active Users</h3>
          </div>
         
        </div>
        </div>
        <div className={style.section1_right}>
          <div className={style.section1_right1_img}>
            <img className={style.img} src="/images/images_30.jpg" alt="" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Section1;
