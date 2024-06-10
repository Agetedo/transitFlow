import "..//styles/ButtonLight.scss";

export default function ButtonLight({ type, onClick, buttonText }) {
  return (
    <button className="button-light" type={type} onClick={onClick}>{buttonText}</button>
  )
}