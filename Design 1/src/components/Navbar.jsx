import React from 'react'
import style from './Navbar.module.css'
const Navbar = () => {
  return (
    <div>
      <div className={style.navbar}>
        <div className={style.logo}>
            <h1>Play<span>NFT</span></h1>
        </div>
        <div className={style.links}>
            <a className={style.active} href="">Home</a>
            <a className={style.active} href="">Explore</a>
            <a className={style.active} href="">Marketplace</a>
            <a className={style.active} href="">Artist</a>
            <a className={style.active} href="">News</a>
        </div>
        <div className={style.buttons}>
            <div className={style.search}>Search</div>
            <div className={style.register}>Register</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
