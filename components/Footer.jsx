import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useId } from "react";
import PathConstants from "../routes/pathConstants";
import FooterConteiner from "./FooterConteiner";
import footerLogo from "/tf-logo.png";
import { headerContacts } from "../DataBase/headerContacts";
import ButtonLight from "./ButtonLight";
import { headerSocialMenu } from "../DataBase/headerSocialMenu";
import "..//styles/Footer.scss";
const footerText = <>{"Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition."}</>;
const copyrightText = <>{"© "}</>;
const rightText = <>{" TransitFlow. All Rights reserved."}</>;

function FooterLogo({ imgAlt }) {
  return(
    <Link to={PathConstants.HOME} className="footer-logo__link">
      <img src={footerLogo} alt={imgAlt} />
    </Link>
  );
}

const contactText = ["Email contact@logistics.com", "Call us (00) 112 365 489"];
const footerContacts = headerContacts.filter(text =>
  contactText.some(i => text.contact.includes(i))
);
const footerContactsList = footerContacts.map(contact => 
  <div className="footer-hookup" key={contact.id}>
    <img src={contact.imgSrc} alt={contact.imgAlt} />
    <p className="text">{contact.contact}</p>
  </div>
);
  
function FooterContacts({ text }) {
  return(
    <div className="footer-contacts">
      <FooterLogo imgAlt={"TransitFlow logo"} />
      <p className="footer-contacts__text">{text}</p>
      {footerContactsList}
    </div>
  );
}

function FooterPagesMenu() {
  return(
    <nav className="footer-pages__menu">
      <ul id="footerPagesMenuList"> 
        <li className="subtitle">Pages</li>               
        <li className="footer-menu__item">
          <NavLink to={PathConstants.ABOUTPAGE} className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}>About Us</NavLink>
        </li>
        <li className="footer-menu__item">
          <NavLink to={PathConstants.TEAMPAGE} className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}>Our Team</NavLink>
        </li>
        <li className="footer-menu__item">
          <NavLink to={PathConstants.PROJECTPAGE} className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}>Our Project</NavLink>
        </li>
        <li className="footer-menu__item">
          <NavLink to={PathConstants.PRICINGPAGE} className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}>Pricing</NavLink>
        </li>
        <li className="footer-menu__item">
          <NavLink to={PathConstants.CONTACTPAGE} className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function FooterCompanyMenu() {
  return(
    <nav className="footer-company__menu">
      <ul id="footerCompanyMenuList"> 
        <li className="subtitle">Company</li>               
        <li className="footer-menu__item">
          <NavLink to={PathConstants.LIECENSESPAGE} className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}>Liecenses</NavLink>
        </li>
        <li className="footer-menu__item">
          <NavLink to={PathConstants.SERVICESPAGE} className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}>Services</NavLink>
        </li>
        <li className="footer-menu__item">
          <NavLink to={PathConstants.BLOGPAGE} className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}>Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function FooterSubscribe({ subscribe }) {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = (data) => { console.log(data); };
  const intialValues = { 
    email: "Email*",
  };
  const subscribeInputId = useId();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="form3">
      <label className="subtitle" htmlFor={subscribeInputId}>{subscribe}</label>
      <input id={subscribeInputId}
        defaultValue={intialValues.email}
        placeholder="contact@logistics.com"
        type="email" autoComplete="off"
        aria-invalid={errors.email ? "true" : "false"}
        {...register("email", {
          required: "Email is required",
          validate: {
            maxLength: (v) => v.length <= 30 || "The Email should have at most 50 characters",
            matchPattern: (v) =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "Email address must be a valid address",
          },
        })}
      />
      {errors.email?.message && (
        <p role="alert" className="footer-error__message">{errors.email.message}</p>
      )}
      
      <ButtonLight type="submit" buttonText={"Subscribe Now"}/>
    </form>
  );
}

function FooterMenu() {
  return(
    <div className="footer-menu">
      <FooterPagesMenu />
      <FooterCompanyMenu />
      <FooterSubscribe subscribe={"Subscribe"}/>
    </div>
  );
}
function FooterItems() {
  return(
    <div className="footer-items">
      <FooterContacts text={footerText} />
      <FooterMenu />
    </div>
  );
}

const footerSocialList = headerSocialMenu.map(item => 
  <li key={item.id} className="social-menu__item">
    <Link to={item.linkTo} rel="noopener" target="_blank" className="social-menu__link">
      <img src={item.imgSrc} alt="#" />
    </Link>
  </li>
);

function FooterSocialMenu() {
  return(
    <nav className="social__menu">
      <ul className="social-menu__list">{footerSocialList}</ul>
    </nav>
  );
}
function FooterCopyright({ text, rights }) {
  return(
    <div className="footer-copyright">
      <p className="copyright-text">{text}{new Date().getFullYear()}{rights}</p>
      <FooterSocialMenu />
    </div>
  );
}

export default function Footer() {
  return (
    <FooterConteiner>
      <FooterItems />
      <FooterCopyright 
        text={copyrightText}
        rights={rightText}
      />
    </FooterConteiner>
  );
}