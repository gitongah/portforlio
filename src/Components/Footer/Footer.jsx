import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
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