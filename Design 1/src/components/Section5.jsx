import React from 'react'
import style from './section5.module.css'
const Section5 = () => {
  return (
    <div className={style.section5}>
       <h1 className={style.h1}>Explore Artworks</h1>
       <div className={style.artworksupper}>
            <div className={style.artwork}>
                <div className={style.image}>
                    <div className={style.imageupper}>
                        <img className={style.img1} src="/images/images_19.jpg" alt="" />
                        <img className={style.img2} src="/images/images_20.jpg" alt="" />
                        <img className={style.img3} src="/images/images_21.jpg" alt="" />
                    </div>
                    <div className={style.imagelower}>
                        <img className={style.img4} src="/images/images_22.jpg" alt="" />
                    </div>
                </div>
                <div className={style.details}>
                    <div className={style.title}>Abstract</div>
                    <div className={style.item}>30 items</div>
                </div>
            </div>
            <div className={style.artwork}>
                <div className={style.image}>
                    <div className={style.imageupper}>
                        <img className={style.img1} src="/images/images_18.jpg" alt="" />
                        <img className={style.img2} src="/images/images_22.jpg" alt="" />
                        <img className={style.img3} src="/images/images_21.jpg" alt="" />
                    </div>
                    <div className={style.imagelower}>
                        <img className={style.img4} src="/images/images_24.jpg" alt="" />
                    </div>
                </div>
                <div className={style.details}>
                    <div className={style.title}>3D Art</div>
                    <div className={style.item}>45 items</div>
                </div>
            </div>
            <div className={style.artwork}>
                <div className={style.image}>
                    <div className={style.imageupper}>
                        <img className={style.img1} src="/images/images_24.jpg" alt="" />
                        <img className={style.img2} src="/images/images_25.jpg" alt="" />
                        <img className={style.img3} src="/images/images_27.jpg" alt="" />
                    </div>
                    <div className={style.imagelower}>
                        <img className={style.img4} src="/images/images_26.jpg" alt="" />
                    </div>
                </div>
                 <div className={style.details}>
                    <div className={style.title}>Modern Art</div>
                    <div className={style.item}>59 items</div>
                </div>
            </div>
       </div>
       <div className={style.artworkslower}>
            <div className={style.artwork}>
                <div className={style.image}>
                    <div className={style.imageupper}>
                        <img className={style.img1} src="/images/images_16.jpg" alt="" />
                        <img className={style.img2} src="/images/images_17.jpg" alt="" />
                        <img className={style.img3} src="/images/images_18.jpg" alt="" />
                    </div>
                    <div className={style.imagelower}>
                        <img className={style.img4} src="/images/images_17.jpg" alt="" />
                    </div>
                </div>
                 <div className={style.details}>
                    <div className={style.title}>Game</div>
                    <div className={style.item}>25 items</div>
                </div>
            </div>
            <div className={style.artwork}>
                <div className={style.image}>
                    <div className={style.imageupper}>
                        <img className={style.img1} src="/images/images_19.jpg" alt="" />
                        <img className={style.img2} src="/images/images_24.jpg" alt="" />
                        <img className={style.img3} src="/images/images_28.jpg" alt="" />
                    </div>
                    <div className={style.imagelower}>
                        <img className={style.img4} src="/images/images_29.jpg" alt="" />
                    </div>
                </div>
                <div className={style.details}>
                    <div className={style.title}>Graffic</div>
                    <div className={style.item}>37 items</div>
                </div>
            </div>
            <div className={style.artwork}>
                <div className={style.image}>
                    <div className={style.imageupper}>
                        <img className={style.img1} src="/images/images_26.jpg" alt="" />
                        <img className={style.img2} src="/images/images_17.jpg" alt="" />
                        <img className={style.img3} src="/images/images_24.jpg" alt="" />
                    </div>
                    <div className={style.imagelower}>
                        <img className={style.img4} src="/images/images_25.jpg" alt="" />
                    </div>
                </div>
                <div className={style.details}>
                    <div className={style.title}>Watercolor</div>
                    <div className={style.item}>40 items</div>
                </div>
            </div>
       </div>
       
    </div>
  )
}

export default Section5
