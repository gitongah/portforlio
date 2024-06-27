// import React from 'react'
// import './Hero.css'
// import profile_img from '../../assets/kato1.jpeg'
// import AnchorLink from 'react-anchor-link-smooth-scroll';

// const Hero = () => {

// //   document.getElementById('downloadResume').addEventListener('click', function() {
// //   const link = document.createElement('a');
// //   link.href = `../../assets/EdwinMbaabuResum.pdf`; 
// //   link.download = 'Edwin_Resume.pdf';      // Replace with the desired file name
// //   document.body.appendChild(link);
// //   link.click();
// //   document.body.removeChild(link);
// // });

  
//   return (
//     <div className='hero' id='home'>

//       <img className='profile_img' src={profile_img} alt="picture of mbaabu gitonga"/>
//       <h1><span> Welcome to Mbaabu Gitonga</span></h1>
//       <p>Hello I am Mbaabu Gitonga a software Engineer, Aspiring Entrepreneur
//         with a vission of solving real world problems by using Design thinking. I would love to conect with people 
//         who have the same mindset as I do. Feel free to contact me and lets have a chart.
//         </p>
//         <div className="hero-action">
//           <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
//           <div id="downloadResume" className="hero-resume">My resume</div>
//         </div>
//       </div>
//   );
// };

// export default Hero;


import React from "react";
import './Hero.css'
import Me from "../../assets/kato1.jpeg";
function Hero() {
  return (
    <>
      <header id="header">
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Edwin Mbaabu</h1>
          <h5 className="text-light">Full-Stack Developer</h5>
          {/* <CTA /> */}
          <div>
            <div className="me">
              <img src={Me} alt="image of mbaabu" />
            </div>
          </div>
          {/* <HeaderSocials /> */}
          {/* <a href="#footer" className="scroll__down">
            Scroll Down
          </a> */}
        </div>
      </header>
    </>
  );
}

export default Hero;;