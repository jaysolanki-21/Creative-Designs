import React from "react";
import style from "./section4.module.css";
const Section4 = () => {
  return (
    <div className={style.section4}>
      <h1 className={style.h1}>Top Sellers</h1>
      <div className={style.slider1}>
        <div className={style.wrapper1}>
          <div className={style.item1}>
            <div className={style.image}>
              <img className={style.img} src="/images/images_4.jpg" alt="" />
            </div>
            <div className={style.detail}>
              <div className={style.name}>Olivia Smith</div>
              <div className={style.price}>263.7 Eth</div>
            </div>
          </div>
          <div className={style.item1}>
            <div className={style.image}>
              <img className={style.img} src="/images/images_9.jpg" alt="Liam Johnson" />
            </div>
            <div className={style.detail}>
              <div className={style.name}>Liam Johnson</div>
              <div className={style.price}>154.2 Eth</div>
            </div>
          </div>

          <div className={style.item1}>
            <div className={style.image}>
              <img className={style.img} src="/images/images_7.jpg" alt="Emma Brown" />
            </div>
            <div className={style.detail}>
              <div className={style.name}>Emma Brown</div>
              <div className={style.price}>320.1 Eth</div>
            </div>
          </div>

          <div className={style.item1}>
            <div className={style.image}>
              <img className={style.img} src="/images/images_3.jpg" alt="Noah Davis" />
            </div>
            <div className={style.detail}>
              <div className={style.name}>Noah Davis</div>
              <div className={style.price}>212.5 Eth</div>
            </div>
          </div>

          <div className={style.item1}>
            <div className={style.image}>
              <img className={style.img} src="/images/images_5.jpg" alt="Ava Wilson" />
            </div>
            <div className={style.detail}>
              <div className={style.name}>Ava Wilson</div>
              <div className={style.price}>198.9 Eth</div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.slider2}>
        <div className={style.wrapper2}>
          <div className={style.item1}>
            <div className={style.image}>
              <img className={style.img} src="/images/images_1.jpg" alt="Sophia Moore" />
            </div>
            <div className={style.detail}>
              <div className={style.name}>Sophia Moore</div>
              <div className={style.price}>276.4 Eth</div>
            </div>
          </div>

          <div className={style.item1}>
            <div className={style.image}>
              <img className={style.img} src="/images/images_2.jpg" alt="Mason Taylor" />
            </div>
            <div className={style.detail}>
              <div className={style.name}>Mason Taylor</div>
              <div className={style.price}>189.7 Eth</div>
            </div>
          </div>

          <div className={style.item1}>
            <div className={style.image}>
              <img className={style.img} src="/images/images_10.jpg" alt="Isabella Anderson" />
            </div>
            <div className={style.detail}>
              <div className={style.name}>Isabella Anderson</div>
              <div className={style.price}>244.8 Eth</div>
            </div>
          </div>

          <div className={style.item1}>
            <div className={style.image}>
              <img className={style.img} src="/images/images_6.jpg" alt="Lucas Thomas" />
            </div>
            <div className={style.detail}>
              <div className={style.name}>Lucas Thomas</div>
              <div className={style.price}>312.3 Eth</div>
            </div>
          </div>

          <div className={style.item1}>
            <div className={style.image}>
              <img className={style.img} src="/images/images_14.jpg" alt="Mia Jackson" />
            </div>
            <div className={style.detail}>
              <div className={style.name}>Mia Jackson</div>
              <div className={style.price}>291.6 Eth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
