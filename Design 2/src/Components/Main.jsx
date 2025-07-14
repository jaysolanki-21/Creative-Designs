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
     <div className={style.section5}>
        <span>Benefits</span>
        <h1>Feel the difference in every aspect</h1>
        <div className={style.data}>
          <div className={style.datastick}>
            <div className={style.rightimage}>
              <img src="images/testingUser1.webp" alt="" />
            </div>
            <div className={style.leftdata}>
             
              <div className={style.leftupper}>
                <h1 className={style.heading}>Optimized female health</h1>
                <h6 className={style.subheading}>Red light therapy can effectively support your fertility in the long-term.</h6>
              </div>

             
              <div className={style.leftlower}>
                <span className={style.lowerSpan}>By increasing blood flow, supporting tissue regeneration and balancing hormones, CellLight™ supports your uterus and ovaries naturally.</span>

                <div className={style.taglines}>
                 
                  <div className={style.tagline}>
                    <span className={style.taglineHeading}>Promotes</span>
                    <span className={style.taglineText}>
                      healthy tissue
                    </span>
                  </div>

                 
                  <div className={style.tagline}>
                    <span className={style.taglineHeading}>Balances</span>
                    <span className={style.taglineText}>
                      Your hormones
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.datastick}>
            <div className={style.rightimage}>
              <img src="images/testingUser2.webp" alt="" />

            </div>
            <div className={style.leftdata}>
             
              <div className={style.leftupper}>
                <h1 className={style.heading}>Enhanced deep sleep</h1>
                <h6 className={style.subheading}>Near-infrared light enhances mitochondrial function in neurons, helping improve deep sleep.</h6>
              </div>

             
              <div className={style.leftlower}>
                <span className={style.lowerSpan}>CellLight™ will not disturb your natural sleep-wake-cycle and melatonin production.</span>

                <div className={style.taglines}>
                 
                  <div className={style.tagline}>
                    <span className={style.taglineHeading}>Longer deep sleep</span>
                    <span className={style.taglineText}>
                      
                    </span>
                  </div>

                 
                  <div className={style.tagline}>
                    <span className={style.taglineHeading}>Enhanced neuronal</span>
                    <span className={style.taglineText}>
                      function
                    </span>
                  </div>
                  <div className={style.tagline}>
                    <span className={style.taglineHeading}>Balances sleep</span>
                    <span className={style.taglineText}>
                      hormone secretion
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.datastick}>
            <div className={style.rightimage}>
              <img src="images/testingUser3.webp" alt="" />

            </div>
            <div className={style.leftdata}>
             
              <div className={style.leftupper}>
                <h1 className={style.heading}>Youthful skin</h1>
                <h6 className={style.subheading}>CellLight™ accelerates cellular repair and stem cell proliferation, leading to higher natural collagen and elastin production.</h6>
              </div>

             
              <div className={style.leftlower}>
                <span className={style.lowerSpan}>This results in youthful, glowing and clear skin, allowing you to look as young as you feel in your heart.</span>

                <div className={style.taglines}>
                 
                  <div className={style.tagline}>
                    <span className={style.taglineHeading}>Accelerated cellular</span>
                    <span className={style.taglineText}>
                     repair
                    </span>
                  </div>

                 
                  <div className={style.tagline}>
                    <span className={style.taglineHeading}>Non-invasively</span>
                    <span className={style.taglineText}>
                      stimulated skin cell proliferation
                    </span>
                  </div>
                  <div className={style.tagline}>
                    <span className={style.taglineHeading}>More natural collagen</span>
                    <span className={style.taglineText}>
                      sand elastin
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.datastick}>
            <div className={style.rightimage}>
              <img src="images/testingUser4.webp" alt="" />
            </div>
            <div className={style.leftdata}>
             
              <div className={style.leftupper}>
                <h1 className={style.heading}>Extended longevity</h1>
                <h6 className={style.subheading}>CellLight™ helps mitochondria produce more energy (ATP), supporting long-term health and protecting against chronic conditions.</h6>
              </div>

             
              <div className={style.leftlower}>
                <span className={style.lowerSpan}>Increasing cellular energy not only adds years to your life (lifespan) but also ensures those years are lived in good health (healthspan).</span>

                <div className={style.taglines}>
                 
                  <div className={style.tagline}>
                    <span className={style.taglineHeading}>Improved cellular</span>
                    <span className={style.taglineText}>
energy production
                    </span>
                  </div>

                 
                  <div className={style.tagline}>
                    <span className={style.taglineHeading}>Better functioning</span>
                    <span className={style.taglineText}>
                      mitochondria
                    </span>
                  </div>
                  <div className={style.tagline}>
                    <span className={style.taglineHeading}>Reduced aging velocity</span>
                    <span className={style.taglineText}>
                     
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.datastick}>
            <div className={style.rightimage}>
              <img src="images/testingUser5.webp" alt="" />
            </div>
            <div className={style.leftdata}>
             
              <div className={style.leftupper}>
                <h1 className={style.heading}>Boosted mental & physical resilience</h1>
                <h6 className={style.subheading}>Studies show consistent use of CellLight™ improves heart rate variability (HRV) over time and reduces oxidative stress.</h6>
              </div>

             
              <div className={style.leftlower}>
                <span className={style.lowerSpan}>Higher HRV scores reflect greater mental and physical resilience . Lowering oxidative stress helps prevent conditions like atherosclerosis, hypertension, Alzheimer’s disease, diabetes, infertility, chronic fatigue syndrome, and slows the aging process</span>

                <div className={style.taglines}>
                 
                  <div className={style.tagline}>
                    <span className={style.taglineHeading}>Reduced oxidative stress</span>
                    <span className={style.taglineText}>
                     
                    </span>
                  </div>

                 
                  <div className={style.tagline}>
                    <span className={style.taglineHeading}>Higher HRV</span>
                    <span className={style.taglineText}>
                     
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.section6}>
        <div className={style.section6image}>
          <h1>Learn how CellLight powers your health. Innovative,<span> science-backed technology created to fuel cellular energy and longevity.</span></h1>
          <div className={style.button}>Explore <i className={"ri-arrow-right-line"}></i></div>
        </div>
      </div>
     
    </div>
  );
};

export default Main;
