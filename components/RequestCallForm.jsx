import { useForm } from "react-hook-form";
import ButtonDark from "./ButtonDark.jsx";
import requestFormIcon from "/svg/line-md_phone-call-twotone-loop.svg";
import "..//styles/RequestCallForm.scss";

function CallFormTitle({ title }) {
  return(
    <>
      <img src={requestFormIcon} alt="#" id="requestFormIcon"/>
      <h3 className="request-form__title">{title}</h3>
    </>
  );
}

export default function RequestCallForm() {
  const callFormTitle = <>{"Leave Your phone number and TransitFlow will call You back!"}</>
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = (data) => { console.log(data); };
  const intialValues = { 
    name: "Your name*", 
    phoneNumber: "Your phone number*",
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="form5">
      <CallFormTitle 
        title={callFormTitle}
      />
      <div className="request-form__items">
        <input
          defaultValue={intialValues.name}
          placeholder="Name" 
          type="text" autoComplete="off"
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name",  { 
            required: true, 
            maxLength: {
              value: 20, 
              message: "The Name should have at most 20 characters",
            },
            pattern: {
              value: /^[A-Za-z ]+$/i,
              message: "The Name must contain only letters",
            } 
          })}
        />
        <input
          defaultValue={intialValues.phoneNumber}
          placeholder="+112365489" 
          type="tel" autoComplete="off"
          aria-invalid={errors.phoneNumber ? "true" : "false"}
          {...register("phoneNumber", { 
            required: true,
            pattern: {
              value: /^\+?\d+$/,
              message: "The Phone Number must be in the format +112365489",
            },
            minLength: { 
              value: 10, 
              message: "The Phone Number should have on less 10 characters",
            },
            validate: {
              maxLength: (v) => v.length <= 12 || "The Phone Number should have at most 12 characters",
            }
          })} 
        />
      </div>
    
      {errors.name && errors.name.type === "required" && (
        <p role="alert" className="error-message">Name is required</p>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <p role="alert" className="error-message">{errors.name.message}</p>
      )}
      {errors.name && errors.name.type === "pattern" && (
        <p role="alert" className="error-message">{errors.name.message}</p>
      )}
      {errors.phoneNumber && errors.phoneNumber.type === "required" && (
        <p role="alert" className="error-message">Phone Number is required</p>
      )}
      {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
        <p role="alert" className="error-message">{errors.phoneNumber.message}</p>
      )}
      {errors.phoneNumber && errors.phoneNumber.type === "minLength" && (
        <p role="alert" className="error-message">{errors.phoneNumber.message}</p>
      )}
      {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && (
        <p role="alert" className="error-message">{errors.phoneNumber.message}</p>
      )}
      <ButtonDark type="submit" buttonText={"Call Me Back!"}/>
    </form>
  );
}