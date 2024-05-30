import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates modi rerum voluptas optio explicabo ullam inventore magnam! Reprehenderit, laborum facere quia rem veritatis nostrum commodi voluptatibus fugiat neque natus.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email ' />
          </div>
          <div className="footer-subscribe">Subscribe </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2024 Edwin Mbaabu. All rights reserved</p>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>Privacy Policy</p>
          <p>Conect with me </p>
        </div>
      </div>
    </div>
  )
}

export default Footer