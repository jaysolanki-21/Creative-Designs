import React from "react";
import style from "./section6.module.css";
const Section6 = () => {
  return (
    <div className={style.section6}>
      <div className={style.section6upper}>
        <h1 className={style.h1}>
          Join Us to Create Sell and Collect NFTs Digital Art
        </h1>
        <div className={style.button}>Join Community</div>
      </div>
      <div className={style.section6lower}>
        <div className={style.first}>
          <div className={style.logo}>
            <h1>
              Play<span>NFT</span>
            </h1>
          </div>
          <div className={style.tagline}>
            The World's Largest Digital Marketplace for crypto collections and
            non fungible tokens (NFTs) buy, sell and discover exclusive digital
            assets
          </div>
          <div className={style.logos}></div>
        </div>
        <div className={style.menu}>
          <h5>Explore</h5>
          <h4>Art</h4>
          <h4>Photography</h4>
          <h4>Music</h4>
          <h4>Games</h4>
        </div>
        <div className={style.menu}>
          <h5>Resources</h5>
          <h4>Help Center</h4>
          <h4>Partners</h4>
          <h4>Suggestions</h4>
          <h4>Newsletters</h4>
        </div>
        <div className={style.menu}>
          <h5>My Account</h5>
          <h4>My Profile</h4>
          <h4>My Collections</h4>
          <h4>My Favorites</h4>
          <h4>My Account Settings</h4>
        </div>
        <div className={style.menu}>
          <h5>Company</h5>
          <h4>About</h4>
          <h4>Careers</h4>
          <h4>Ranking</h4>
          <h4>Activity</h4>
        </div>
      </div>
    </div>
  );
};

export default Section6;
