import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus provident incidunt distinctio, quaerat pariatur aperiam, dolore sunt quibusdam maxime ducimus omnis facere, doloribus quasi tempore mollitia nam a ipsa cum.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>mbaabugitonga@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+15105066172</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>CA United States</p>
            </div>
          </div>
        </div>
        <form className='contact-right'>
          <label htmlFor="">Your Name </label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>

    </div>
  )
}

export default Contact