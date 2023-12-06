import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import logo from '../../utils/BackYardLogo.png'

export default function NavMenu() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else setButton(true);
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          BackYard
          <img src={logo} alt="logo" className="nav-logo-img" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/catalog"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/allProducts"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sale"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sale
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                <i className="fa-solid fa-bag-shopping"></i>
              </Link>
            </li>
            <li>
              <Link
                to="/signUp"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
              <FontAwesomeIcon className="signUpBtn" icon={faRightToBracket} />
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline" link='/signUp'></Button>}
        </div>
      </nav>
    </>
  );
}


  
