import Conteiner from "./Conteiner";
import TitleLeft from "./TitleLeft";
import whyUsImage01 from "/why-us-image01.jpeg";
import whyUsImage02 from "/why-us-image02.jpeg";
import { whyUsProfits } from "../DataBase/whyUsProfits";
import "..//styles/WhyUs.scss";
const text01 = <>{"In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum."}</>;
const text02 = <>{"In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum."}</>;

function WhyUsText ({ text01, text02 }) {
  return(
    <>
      <p className="why-us__text" id="whyUsText01">{text01}</p>
      <p className="why-us__text" id="whyUsText02">{text02}</p>
    </>
  );
}
const whyUsProfitsList = whyUsProfits.map(profit => 
  <div className="why-us__profit" key={profit.id}>
    <img src={profit.iconSrc} alt="#" />
    <h4 className="why-us__title">{profit.title}</h4>
  </div>
);
function WhyUsImages () {
    return(
        <div id="whyUsImages">
            <img src={whyUsImage01} alt="Airplane on the runway" />
            <img src={whyUsImage02} 
              id="whyUsImage02"
              alt="Girl in a room with cardboard boxes" 
            />
        </div> 
    );
}
function WhyUsItems() {
  return(
    <div className="why-us__items">
      <section id="whyUsContent">
        <TitleLeft
          caption={"Why Us"}
          title={"We provide full range global logistics solution"}
        /> 
        <WhyUsText 
          text01={text01} 
          text02={text02} 
        />
        {whyUsProfitsList}
      </section>
      <WhyUsImages />
    </div>
  );
}

export default function WhyUs({ className }) {
  return (
    <Conteiner className={className}>
      <WhyUsItems/>
    </Conteiner>
  );
} 