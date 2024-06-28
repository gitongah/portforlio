import React from 'react';
import {useState} from 'react';
import './Navbar.css';
import {BiHomeAlt, BiUser, BiBook, BiMessageSquareDetail, BiCodeCurly} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {Link} from 'react-scroll';

function Navbar() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <Link to="header" spy={true} smooth={true} duration={500} activeClass='active' ><BiHomeAlt/></Link>
      <Link to="about"  spy={true} smooth={true} duration={500} activeClass='active'><BiUser/></Link>
      <Link to="experience"  spy={true}   smooth={true} duration={500} activeClass='active'><BiCodeCurly/></Link>
      <Link to="portfolio"  spy={true}   smooth={true} duration={500} activeClass='active'><BiBook/></Link>
      <Link to="contact"  spy={true}   smooth={true} duration={500} activeClass='active'><BiMessageSquareDetail/></Link>
    </nav>
  )
}

export default Navbar