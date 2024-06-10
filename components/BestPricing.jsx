import { useState, useEffect } from "react";
import Conteiner from "./Conteiner";
import TitleCenter from "./TitleCenter";
import PlanCards from "./PlanCards.jsx";
import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import ButtonDark from "./ButtonDark.jsx";
import modalCloseIcon from "/svg/modal-close-icon.svg";
import choosePlanIcon from "/bestprice-icon.png";
import "..//styles/BestPricing.scss";

function PlanChooseForm({ basic, standart, premium }) {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = (data) => { console.log(data); };
  const intialValues = { 
    email: "Email*",
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="form4">

      <label className="best-pricing__plan">{basic}
        <input
          type="checkbox"
          value="BASIC"
          placeholder="Basic"
          {...register("plan")}
        />
      </label>

      <label className="best-pricing__plan">{standart}
        <input
          type="checkbox"
          value="STANDART" 
          placeholder="Standart"
          {...register("plan")}
        />
      </label>

      <label className="best-pricing__plan">{premium}
        <input
          type="checkbox"
          value="PREMIUM"
          placeholder="Premium"
          {...register("plan")}
        />
      </label>

      <div className="choose-plan__email">
        <input
          defaultValue={intialValues.email}
          placeholder="contact@logistics.com"
          type="email" autoComplete="off"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: "Email is required",
            validate: {
              maxLength: (v) => v.length <= 30 || "The Email should have at most 50 characters",
              matchPattern: (v) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              "Email address must be a valid address",
            },
          })}
        />
        <ButtonDark type="submit" buttonText={"Choose Plan"}/>
      </div>

      {errors.email?.message && (
        <p role="alert" className="choose-plan__message">{errors.email.message}</p>
      )}
    </form>
  );
}

function ChoosePlanClose({ onClick }) {
  return(
    <div className="choose-plan__close">
      <span>close</span>
      <img src={modalCloseIcon} alt="#" onClick={onClick}/>
    </div>
  );
}
function ChoosePlanTitle({ title }) {
  return(
    <>      
      <img className="choose-plan__icon" src={choosePlanIcon} alt="#" />
      <h2 className="choose-plan__title">{title}</h2>
    </>
  );
}

function ChoosePlan({ onClose }) {
  return(
    <div className="choose-plan">
      <div className="modal-content">
        <ChoosePlanClose onClick={onClose}/>
        <ChoosePlanTitle
          title={"Choose Your Best Pricing!"}
        />
        <PlanChooseForm basic={"BASIC"} standart={"STANDART"} premium={"PREMIUM"} />
      </div>
    </div>
  );
}

export default function BestPricing() {
 const [showChoosePlan, setShowChoosePlan] = useState(false);
  useEffect(() => {
    if (showChoosePlan) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflowY = "scroll";
    }
  }, [showChoosePlan])

  return (
    <Conteiner className={"best-pricing"}>
      <TitleCenter 
        caption={"Pricing"}
        title={"Our Best Pricing"}
      />
      <PlanCards />
      <ButtonDark buttonText={"Choose Plan"} type={"button"} onClick={() => setShowChoosePlan(true)} />
      {showChoosePlan && createPortal(
        <ChoosePlan onClose={() => setShowChoosePlan(false)}/>, 
      document.body )}
    </Conteiner>
  );
}