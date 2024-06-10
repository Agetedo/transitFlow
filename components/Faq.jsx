import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Conteiner from "./Conteiner";
import TitleLeft from "./TitleLeft";
import { faqPanel } from "../DataBase/faqPanels";
import { createPortal } from "react-dom";
import ButtonLight from "./ButtonLight.jsx";
import phoneContactIcon from "/phone-icon.png";
import modalCloseIcon from "/svg/modal-close-icon.svg";
import RequestCallForm from "./RequestCallForm.jsx";
import "..//styles/Faq.scss";

function PhoneContact({ iconAlt, text }) {
  return(
    <div className="phone__contact">
      <img src={phoneContactIcon} alt={iconAlt} />
      <p>{text}</p>
    </div>
  );
}
const panelList = faqPanel.map(panel => 
  <AccordionItem key={panel.id}>
    <AccordionItemHeading>
      <AccordionItemButton>{panel.question}</AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <p className="answer">{panel.answer}</p>
    </AccordionItemPanel>
  </AccordionItem>
);

function FaqItems({ onClick }) {
  return(
    <div className="faq__items">
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        {panelList}
      </Accordion>

      <div className="faq__contact">
        <TitleLeft
          caption={"Let's Talk"}
          title={"You need any help? get free consultation"}
        />
        <PhoneContact 
          iconAlt={"Phone icon"}
          text={"Have Any Questions (00) 112 365 489"}
        />
        <ButtonLight 
          type={"button"} onClick={onClick}
          buttonText={"Contact Us"}
        />
      </div>
    </div>
  );
}

function RequestСall({ onClose }) {
  return(
    <div className="request-call">
      <div className="modal-content">
        <div className="request-call__close">
          <span>close</span>
          <img src={modalCloseIcon} alt="#" onClick={onClose}/>
        </div>
        <RequestCallForm />
      </div>
    </div>
  );
}

export default function Faq() {
  const [showRequestСall, setShowRequestСall] = useState(false);
  useEffect(() => {
    if (showRequestСall) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflowY = "scroll";
    }
  }, [showRequestСall])

  return (
    <Conteiner className={"faq"}>
      <TitleLeft 
        caption={"FAQ"}
        title={"Frequently Asked Questions"}
      />
      <FaqItems onClick={() => setShowRequestСall(true)}/>
      {showRequestСall && createPortal(
        <RequestСall onClose={() => setShowRequestСall(false)}/>, 
      document.body )}
    </Conteiner>
  );
}