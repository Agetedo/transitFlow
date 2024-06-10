import HeaderLogo from "./HederLogo";
import { headerContacts } from "../DataBase/headerContacts";
import Conteiner from "./Conteiner";
import "..//styles/HeaderContacts.scss";

const headerContactsList = headerContacts.map(contact => 
  <div className="header-contact" key={contact.id}>
    <img src={contact.imgSrc} alt={contact.imgAlt} />
    <p className="header-contact__text">{contact.contact}</p>
  </div>
);

function ContactItems() {
  return(
    <div className="header-contacts__items">
      <HeaderLogo imgAlt={"TransitFlow logo"} />
      <div className="contacts__items">{headerContactsList}</div>
    </div>
  );
}

export default function HeaderContacts() {
  return(
    <Conteiner className={"header-contacts"}>
      <ContactItems />
    </Conteiner>
  );
}
