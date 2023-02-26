import React from 'react'
import "./_NavbarHead.scss"
import { Link} from "react-router-dom"
const NavbarHead = () => {
  return (
    <>
        <div className="navbarHead">
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-6 col-md-12 col-s-12 col-xs-12 navbarHeadLeft">
              <p>Open daily 10:00–5:00, </p>
              <p>Thursdays until 8:00 </p>
            </div>
            <div className="col-6 col-lg-6 col-md-12 col-s-12 col-xs-12  navbarHeadRight">
              <ul>
                <li>
                  <Link to="/buyticket">buy ticket</Link>
                </li>
                <li>
                  <Link to="">become a member </Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarHead
