import React, { useState } from 'react'
import { useRef } from 'react';

import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


export const Navbar = () => {

  window.addEventListener('scroll', function(){
  const navbar=this.document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY>0)
})


  const [menu, setMenu] = useState('')
  const menuRef = useRef();

  const openMenue = ()=>{
    menuRef.current.style.right='0'
  }

  const closeMenue = ()=>{
    menuRef.current.style.right='-350px'
  }
  return (
    <div className='navbar'>

      {/* <img src={logo} alt="Edwin Mbaabu logo" /> */}
      <img className="nav-mob-open"src={menu_open} onClick= {openMenue }alt="" />
      <ul className='nav-menu' ref={menuRef}>
        <img className="nav-mob-close"src={menu_close} onClick={closeMenue}  alt="" />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>{menu === 'home' ? <img src={underline} alt=' ' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu('about')}>About Me</p>
          </AnchorLink>{menu === 'about' ? <img src={underline} alt=' ' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => setMenu('services')}>Services</p>
          </AnchorLink>{menu === 'services' ? <img src={underline} alt=' ' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#mywork'>
            <p onClick={() => setMenu('mywork')}>Portfolio</p>
          </AnchorLink>{menu === 'mywork' ? <img src={underline} alt=' ' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>{menu === 'contact' ? <img src={underline} alt=' ' /> : <></>}
        </li>
      </ul>

      {/* <div className='nav-connect' > <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div> */}

    </div>
  )
}
