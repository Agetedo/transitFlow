import { bestPricing } from "../DataBase/bestPricing";
import "..//styles/PlanCards.scss";

export default function PlanCards() {
  const pricingCardsList = bestPricing.map(card =>
    <div key={card.id} className="best-pricing__card">
      <h3 className="title">{card.title}</h3>
      <p className="pricing">{card.pricing}</p>
      <p className="text">{card.truck}</p>
      <p className="text">{card.insurance}</p>
      <p className="text">{card.pathKm}</p>
      <p className="text">{card.realTime}</p>
    </div>
  )
  return(
    <div className="best-pricing__items">{pricingCardsList}</div>
  );
}