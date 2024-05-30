import React, { useState } from 'react'

import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Navbar = () => {

  window.addEventListener('scroll', function(){
  const navbar=this.document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY>0)
})


  const [menu, setMenu] = useState('')
  return (
    <div className='navbar'>

      {/* <img src={logo} alt="Edwin Mbaabu logo" /> */}
      <ul className='nav-menu'>
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
