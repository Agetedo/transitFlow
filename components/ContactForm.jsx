import { useForm } from "react-hook-form";
import Conteiner from "./Conteiner";
import TitleCenter from "./TitleCenter";
import ButtonLight from "./ButtonLight";
import "..//styles/ContactForm.scss";
import { headerContacts } from "../DataBase/headerContacts";
const caption = <>{"Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel. Porttitor nulla tempor elit nec feugiat tempus phasellus."}</>;

function ContactFormCaption({ text }) {
  return(
    <p className="contact-form__caption">{text}</p>
  );
}

const contactsList = headerContacts.map(contact => 
  <div className="contact-list" key={contact.id}>
    <img src={contact.imgSrc} alt={contact.imgAlt} />
    <p className="contact-list__text">{contact.contact}</p>
  </div>
);

function ContactList() {
  return(
   <div className="contact-list__items">{contactsList}</div>
  );
}

function MessageForm() {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = (data) => { console.log(data); };
  const intialValues = { 
    name: "Your name*", 
    email: "Email*",
    phoneNumber: "Phone number*",
    city: "City*",
    userMessage: "Your message",
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="form2">
      <div className="message-form__items">
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
        <input
          defaultValue={intialValues.city}
          placeholder="City" autoComplete="off"
          type="text"
          aria-invalid={errors.city ? "true" : "false"}
          {...register("city",  {
            required: true,
            pattern: /([A-Za-z]+(?: [A-Za-z]+)*)/,
            validate: {
              maxLength: (v) => v.length <= 30 || "The City should have at most 30 characters",
            }
          })}
        />
      </div>
      <textarea
        defaultValue={intialValues.userMessage}
        placeholder="Your Message"
        aria-invalid={errors.userMessage ? "true" : "false"}
        {...register("message", {
          pattern: /[A-Za-z]/,
        })}
      />
    
      {errors.email?.message && (
        <p role="alert" className="error-message">{errors.email.message}</p>
      )}
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
      {errors.city && errors.city.type === "required" && (
        <p role="alert" className="error-message">City is required</p>
      )}
      {errors.city && errors.city.type === "maxLength" && (
        <p role="alert" className="error-message">{errors.city.message}</p>
      )}
      <ButtonLight type="submit" buttonText={"Submit Message"}/>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Conteiner className={"contact-form"}>
      <TitleCenter 
        caption={"Contact"}
        title={"Get in touch with us"} style={{ color: "white" }}
      />
      <ContactFormCaption text={caption}/>
      <ContactList />
      <MessageForm />
    </Conteiner>
  );
} 