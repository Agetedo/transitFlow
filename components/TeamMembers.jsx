import { Link } from "react-router-dom";
import Conteiner from "./Conteiner";
import TitleCenter from "./TitleCenter";
import { transporters } from "../DataBase/transporters";
import PathConstants from "../routes/pathConstants";
import "..//styles/Transporters.scss";
import "..//styles/TeamMembers.scss";

const heads = transporters.filter(member =>
  member.position.includes("Head")
);
const teamMembersList = heads.map(member => 
  <div key={member.id} className="head-card">
    <img src={member.imageSrc} alt="" />
        
    <div className="team-card__member">
      <Link to={member.nameLink} className="team-card__name-link">
        <p className="name">{member.name}</p>
      </Link>
      <p className="position">{member.position}</p>
    </div>
  </div>
);

function TransportersItems() {
  return(
    <div className="team-members__items">{teamMembersList}</div>
  );
}

function TeamButton({ buttonText }) {
  return(
    <div className="team-members__button">
      <Link to={PathConstants.TEAMPAGE} className="link">
        {buttonText}
      </Link> 
    </div>
  );
}

export default function TeamMembers() {
  return (
    <Conteiner className={"team-members"}>
      <TitleCenter 
        caption={"The Transporters"}
        title={"Meet Expert Team"}
      />
      <TransportersItems />
      <TeamButton buttonText={"See More"} />
    </Conteiner>
  );
} 