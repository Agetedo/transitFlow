import { Link } from "react-router-dom";
import Conteiner from "./Conteiner";
import TitleCenter from "./TitleCenter";
import { transporters } from "../DataBase/transporters";
import "..//styles/Transporters.scss";

const membersCardsList = transporters.map(member => 
  <div key={member.id} className="team-card">
    <img src={member.imageSrc} alt="" />
        
    <div className="team-card__member">
      <Link to={member.nameLink} className="team-card__name-link">
        <p className="name">{member.name}</p>
      </Link>
      <p className="position">{member.position}</p>
      <div className="team-card__social">
        <Link to={member.social.link01To} className="team-card__link">
          <img src={member.social.icon01Src} alt="#" />
        </Link>
        <Link to={member.social.link02To} className="team-card__link">
          <img src={member.social.icon02Src} alt="#" />
        </Link>
        <Link to={member.social.link03To} className="team-card__link">
          <img src={member.social.icon03Src} alt="#" />
        </Link>
      </div>
    </div>
  </div>
);

function TransportersItems() {
  return(
    <div className="transporters__items">{membersCardsList}</div>
  );
}

export default function Transporters() {
  return (
    <Conteiner className={"transporters"}>
      <TitleCenter 
        caption={"The Transporters"}
        title={"Meet Expert Team"}
      />
      <TransportersItems />
    </Conteiner>
  );
} 