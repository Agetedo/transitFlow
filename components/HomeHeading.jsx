import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import ConteinerBg from "./ConteinerBg.jsx";
import ButtonLight from "./ButtonLight.jsx";
import ButtonDark from "./ButtonDark.jsx";
import modalCloseIcon from "/svg/modal-close-icon.svg";
import modalEmailLogo from "/email-logo.png";
import "..//styles/HomeHeading.scss";

function FlowSubscribeTitle({ title, text }) {
  return(
    <>
      <img className="modal-content__logo" src={modalEmailLogo} alt="#" />
      <h4 className="modal-content__title">{title}</h4>
      <p className="modal-content__text">{text}</p>
    </>
  );
}

function ModalForm() {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = (data) => { console.log(JSON.stringify(data)); };
  const intialValues = { email: "Enter Your email",};
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="form1">
      <div className="email__items">
        <input
          defaultValue={intialValues.email}
          placeholder="flow123@flmail.com"
          type="email" autoComplete="off"
          {...register("email", {
            required: "Email is required",
            validate: {
              maxLength: (v) => v.length <= 50 || "The email should have at most 50 characters",
              matchPattern: (v) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              "Email address must be a valid address",
            },
          })}
        />
        <ButtonDark type="submit" buttonText={"Subscribe"}/>
      </div>
        
      {errors.email?.message && (
        <small id="errorMessage">{errors.email.message}</small>
      )}
    </form>
  );
}

function FlowSubscribe({ onClose }) {
  return(
    <div id="flowSubscribe">
      <div className="modal-content">

        <div className="close">
          <span>close</span>
          <img src={modalCloseIcon} alt="#" onClick={onClose}/>
        </div>

        <FlowSubscribeTitle 
          title={"Subscribe to our newsletter"} 
          text={"Signup for our weekly newsletter to get the latest news, updates and offers delivered directly in your inbox"}
        />
        <ModalForm />
      </div>
    </div>
  );
}

export default function HomeHeading({ className, imageUrl, caption, title, text, buttonText }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflowY = "scroll";
    }
  }, [showModal]);

  return (
    <ConteinerBg className={className} imageUrl={imageUrl}>
      <h3 className="heading__caption">{caption}</h3>
      <h1 className="heading__title">{title}</h1>
      <p className="heading__text">{text}</p>
            
      <ButtonLight buttonText={buttonText} onClick={() => setShowModal(true)} />
      {showModal && createPortal(
        <FlowSubscribe onClose={() => setShowModal(false)}/>, 
      document.body )}
    </ConteinerBg>
  );
} 