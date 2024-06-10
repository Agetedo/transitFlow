import { whyUsIndicators } from "../DataBase/whyUsIndicators";
import "..//styles/WhyUsIndicators.scss";

export default function WhyUsIndicators() {

  const whyUsIndicatorsList = whyUsIndicators.map(indicator => 
    <div className="indicator" key={indicator.id}>
      <div className="indicator__wrapper">
        <span>{indicator.indicator}</span>
      </div>
      <h4 className="caption">{indicator.caption}</h4>
    </div>
  );
  return(
    <div className="why-us__indicators">{whyUsIndicatorsList}</div> 
  );
} 