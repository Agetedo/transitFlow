import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import { headerSocialMenu } from "../DataBase/headerSocialMenu";
import tfLogo from "/tf-logo.png";
import HeaderConteiner from "./HeaderConteiner";
import "..//styles/Header.scss";

const headerSocialList = headerSocialMenu.map(item => 
  <li key={item.id} className="social-menu__item">
    <Link to={item.linkTo} rel="noopener" target="_blank" className="social-menu__link">
      <img src={item.imgSrc} alt="#" />
    </Link>
  </li>
);

function HeaderSocialMenu() {
  return(
    <nav className="social__menu">
      <ul className="social-menu__list">{headerSocialList}</ul>
    </nav>
  );
}
function HeaderButton({ buttonText }) {
  return(
    <Link to={PathConstants.PRICINGPAGE} className="header-button">
      {buttonText}
    </Link>
  );
}
function HeaderLinks({ buttonText }) {
  return(
    <div className="header-links__items">
      <HeaderSocialMenu />
      <HeaderButton buttonText={buttonText} />
    </div>
  );
}

function LogoMobile({ imgAlt }) {
  return(
    <Link to={PathConstants.HOME} className="logo-mobile">
      <img src={tfLogo} alt={imgAlt} />
    </Link>
  );
}

export default function Header({ imageUrl }) {
  const [nav, setNav] = useState(false);

  return (
    <HeaderConteiner imageUrl={imageUrl}>
      <div className="header__items">
        <LogoMobile imgAlt={"TransitFlow logo"} />

        <div className="navigation">
          <div className={nav ? "mobile__menu active" : "mobile__menu"} onClick={() => {setNav(!nav)}}>
            <span /><span /><span />
          </div>
                            
          <nav className={nav ? "header__menu open" : "header__menu"} id="menuList">
            <ul className={nav ? "menu__list show" : "menu__list"} >
                                        
              <li className="menu__item">
                <NavLink to={PathConstants.HOME} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={PathConstants.ABOUTPAGE} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>About</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={PathConstants.SERVICESPAGE} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>Services</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={PathConstants.PROJECTPAGE} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>Project</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={PathConstants.CONTACTPAGE} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <HeaderLinks buttonText={"Best Pricing"} />
      </div>
    </HeaderConteiner>
  );
}