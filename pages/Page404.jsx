import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import HeaderContacts from "../components/HeaderContacts.jsx";
import ConteinerBg from "../components/ConteinerBg";
import Conteiner from "../components/Conteiner";
import message404 from "/message404.png";
import "..//styles/ButtonLight.scss";
import "..//styles/Page404.scss";

function Message404({ buttonText }) {
    return(
        <div className="message404">
            <img src={message404} alt="#" />
            <Link to={PathConstants.HOME} className="button-light">
              {buttonText}
            </Link>
        </div>
    )
}

export default function Page404() {
    return (
        <>
            <HeaderContacts />
            <ConteinerBg className="page404__heading" imageUrl={"/page404-image.jpeg"}></ConteinerBg>
            <Conteiner className="message404">
              <Message404 buttonText={"Back to Home"}/>
            </Conteiner>
        </>
    );
}