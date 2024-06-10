import TitleLeft from "./TitleLeft";
import whyChooseImage from "/why-choose-image.jpeg";
import { whyChoosePoints } from "../DataBase/whyChoosePoints";
import "..//styles/WhyChoose.scss";
const text = <>{"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition."}</>;

function WhyChooseWrapper ({ className, children }) {
  return(
    <div className={className}>
      <div className="wrapper">{children}</div>
    </div>
  );
}

const whyChooseList = whyChoosePoints.map(point => 
  <div key={point.id} className="point-item" >
    <img src={point.iconSrc} alt="#" className="point-item__image"/>
    <h5 className="point-item__caption">{point.caption}</h5>
  </div>
);
function WhyChoosePoints () {
  return(
    <div className="why-choose__list">{whyChooseList}</div>
  );
}
function WhyChooseImage () {
  return(
    <div className="why-choose__image">
      <img src={whyChooseImage} alt="Airplane Dream Lifter" />
    </div>
  );
}
function WhyChooseItems () {
  return(
    <div className="why-choose__items">
      <WhyChooseImage />

      <section className="why-choose__points">
        <TitleLeft 
          caption={"Why Choose"}
          title={"We create opportunity to reach potential"}
        />
        <p className="why-choose__text">{text}</p>
        <WhyChoosePoints />
      </section>
    </div>
  );
}

export default function WhyChoose() {
  return (
    <WhyChooseWrapper className={"why-choose"}>
      <WhyChooseItems />
    </WhyChooseWrapper>
  );
} 