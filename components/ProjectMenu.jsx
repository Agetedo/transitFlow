import Conteiner from "./Conteiner";
import { Link } from "react-router-dom";
import { projectMenu } from "../DataBase/projectMenu";
import "..//styles/ProjectMenu.scss";

export default function ProjectMenu() {

  const projectMenuListList = projectMenu.map( menuItem => 
    <Link key={menuItem.id} to={menuItem.linkTo} className="project__link">
      <img src={menuItem.imgSrc} alt={menuItem.imgAlt} />
      <section className="project__title">
        <span className="project__caption">{menuItem.caption}</span>
        <h5>{menuItem.title}</h5>
      </section>
    </Link>
  );

  return (
    <Conteiner className={"project-menu"}>
      <div className="project-menu__items">
        {projectMenuListList}
      </div>
    </Conteiner>
  )
}