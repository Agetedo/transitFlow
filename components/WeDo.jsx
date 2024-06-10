import { useState } from "react";
import { Link } from "react-router-dom";
import Conteiner from "./Conteiner.jsx";
import TitleCenter from "./TitleCenter.jsx";
import { weDoItems } from "../DataBase/weDoItems.js";
import ButtonDark from "./ButtonDark.jsx";
import "..//styles/WeDo.scss";

const weDoList = weDoItems.map(item => 
  <section key={item.id} className="we-do__item">
    <Link to={item.linkTo} className="we-do__link">
      <img src={item.imgSrc} alt="#" />
      <h3 className="we-do__caption">{item.caption}</h3>
    </Link>
    <p className="we-do__text">{item.text}</p>
  </section>
);

function WeDoItems() {
  return(
    <div className="we-do__items">{weDoList}</div>
  );
}
function MoreWorksButton({ buttonText, type, onClick }) {
  return(
    <div id="moreWorksButton">
      <ButtonDark 
        buttonText={buttonText}
        type={type}
        onClick={onClick}
      />
    </div>
  );
}

export default function WeDo({ className }) {
  const [showMoreWorks, setShowMoreWorks] = useState(false);

  function handleMoreWorks() {
    setShowMoreWorks(!showMoreWorks);
  }

  return (
    <Conteiner className={className} >
      <TitleCenter 
        caption={"What We Do"}
        title={"Our Logistics Services"}
      />
      <WeDoItems />

      {showMoreWorks && <WeDoItems />}
      <MoreWorksButton 
        buttonText={showMoreWorks ? "Hide Latest" : "More Works"} 
        type="button" 
        onClick={handleMoreWorks}
      />
    </Conteiner>
  );
} 