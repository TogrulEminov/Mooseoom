import React from 'react'
import "./_Footer.scss"
import { Link } from "react-router-dom"
import menuLogo from "../../../media/menu-logo.png"
const Footer = () => {
  return (
    <div className='allFooter'>
      <div className="container">
        <div className="footerHead">
          <div className="row">
            <div className="col 3 col-lg-3 col-md-3 col-xs-12 col-s-12 footerLeft">
              <div className="footerLogo">
                <Link to="/home1"><img src={menuLogo} alt="footerLogo" /></Link>
              </div>
              <div className='footerHeadingTitle'>
                <p>3 Wakehurst Street
                  <br />
                  New York, NY 10002
                </p>
                <Link to="tel:+1234567890">+1-202-555-0133</Link>
                <Link to="mailto:mooseoom@example.com">mooseoom@example.com</Link>
              </div>
              <div className='footerHeadingTitle'>
                <p>Museum:
                  <Link to="tel:286-444-2868">286-444-2868</Link>
                </p>
                <p>
                  Box Office:
                  <Link to="tel:242-307-4107">242-307-4107</Link>
                </p>
                <p>
                  Store:
                  <Link to="tel:333-308-4222">333-308-4222</Link>
                </p>
                <p>

                  Giftshop:
                  <Link to="tel:128-788-8461">128-788-8461</Link>
                </p>
              </div>
            </div>
            <div className="col 3 col-lg-3 col-md-3  col-xs-12 col-s-12 footerCenter">
              <div className="footerCenterHeading">
                <h3>Museum</h3>
                <ul>
                  <li>Mon 10am – 5pm</li>
                  <li>
                    Tue 10am – 9pm</li>
                  <li>
                    Wed–Thu 10am – 5pm</li>
                  <li>
                    Fri 10am – 9pm</li>
                  <li>
                    Sat–Sun 10am – 5pm</li>
                </ul>
              </div>
              <div className="footerCenterHeading">
                <h3>Box Office</h3>
                <ul>
                  <li>Mon 10am – 5pm</li>
                  <li>
                    Tue 10am – 9pm</li>
                  <li>
                    Wed–Thu 10am – 5pm</li>
                  <li>
                    Fri 10am – 9pm</li>
                  <li>
                    Sat–Sun 10am – 5pm</li>
                </ul>
              </div>
            </div>
            <div className="col 3 col-lg-3 col-md-3  col-xs-12 col-s-12 footerCenter">
              <div className="footerCenterHeading">
                <h3>Bar Room</h3>
                <ul>
                  <li>Mon 10am – 7pm</li>
                  <li>
                    Tue 10am – 9pm</li>
                  <li>
                    Wed–Thu 10am – 7pm</li>
                  <li>
                    Fri 10am – 9pm</li>
                  <li>
                    Sat–Sun 10am – 7pm</li>
                </ul>
              </div>
              <div className="footerCenterHeading">
                <h3>Support</h3>
                <ul>
                  <li>Mon 10am – 8pm</li>
                  <li>
                    Tue 10am – 9pm</li>
                  <li>
                    Wed–Thu 10am – 8pm</li>
                  <li>
                    Fri 10am – 9pm</li>
                  <li>
                    Sat–Sun 10am – 8pm</li>
                </ul>
              </div>
            </div>
            <div className="col 3 col-lg-3  col-md-6 col-xs-12 col-s-12 footerRight">
              <h3>İnstagram</h3>
            </div>
          </div>
        </div>
        <div className="footerBody">
          <ul>
            <li>
              <Link to="/home1">Support Privacy</Link>
            </li>
            <li>
              <Link to="/home1">Cookie Policy</Link>
            </li>
            <li>
              <Link to="/home1">Manage Cookies</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
