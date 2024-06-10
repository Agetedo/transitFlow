import { useState } from "react";
import { Link } from "react-router-dom";
import TitleCenter from "./TitleCenter";
import { transportingCards } from "../DataBase/transportingCards.js";
import ButtonDark from "./ButtonDark";
import "..//styles/Transporting.scss";

function TransportingWrapper ({ className, children }) {
  return(
    <div className={className}>
      <div className="wrapper">{children}</div>
    </div>
  );
}

const transportingCardsList = transportingCards.map(card => 
  <Link key={card.id} to={card.linkTo} className="transporting__link" >
    <img src={card.imageSrc} alt={card.imageAlt} />
    <section className="transporting__title">
      <h4 className="title">{card.title}</h4>
      <p className="kind">{card.kind}</p>
    </section> 
  </Link>
);
function TransportingItems() {
  return(
    <div className="transporting__items">{transportingCardsList}</div>
  );
}

function TransportingButton({ buttonText, type, onClick }) {
  return(
    <div id="transportingButton">
      <ButtonDark 
        buttonText={buttonText}
        type={type}
        onClick={onClick}
      />
    </div>
  );
}

export default function Transporting() {
  const [moreWorks, setMoreWorks] = useState(false);

  function handleMoreWorks() {
    setMoreWorks(!moreWorks);
  }

  return (
    <TransportingWrapper className={"transporting"}>
      <TitleCenter 
        caption={"Works"}
        title={"Transporting Across The World"}
      />
      <TransportingItems />
      {moreWorks && <TransportingItems />}
      <TransportingButton
        buttonText={moreWorks ? "Hide Works" : "More Works"} 
        type="button" 
        onClick={handleMoreWorks}
      />
    </TransportingWrapper>
  );
} 