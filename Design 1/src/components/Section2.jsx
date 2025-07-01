import React from "react";
import style from "./section2.module.css";

const Section2 = () => {
  return (
    <div className={style.section2}>
      <div className={style.wrapper}>
        <div className={style.item}>PayPal</div>
        <div className={style.item}>Coinbase</div>
        <div className={style.item}>Binance</div>
        <div className={style.item}>Revolut</div>
        <div className={style.item}>Exodus</div>
        <div className={style.item}>Bitfinex</div>
        <div className={style.item}>Blockchain</div>
      </div>
    </div>
  );
};

export default Section2;
