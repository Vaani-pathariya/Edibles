import React from 'react'
import "../cssFiles/Footer.css"
const Footer = () => {
  return (
    <div>
      <div className="footer-first">
        <div className="icons">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-square-twitter"></i>
        </div>
        <br />
        <div className="footer-options">
            <a href="/">Browse</a>
            <span className="l"></span>
            <a href="/">Community</a>
            <span className="l"></span>
            <a href="/">Post</a>

        </div>
      </div>
      <div className="footer-second">
        <div>
            JOIN OUR EAT WELL - BE WELL CULTURE!
        </div>
        <div>
        <i class="fa-regular fa-copyright"></i>
        &nbsp; EDIBLES | ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  )
}

export default Footer
