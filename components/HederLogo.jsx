import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import tfLogo from "/tf-logo.png";
import "..//styles/HeaderLogo.scss";

export default function HeaderLogo({ imgAlt }) {
  return(
    <Link to={PathConstants.HOME} className="header-logo">
      <img src={tfLogo} alt={imgAlt} />
    </Link>
  );
}