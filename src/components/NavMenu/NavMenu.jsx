import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { Button } from "../Button/Button";

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
          <i className="fa-solid fa-house-tree"></i>
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
                 Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline" link='/signUp'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}


  
