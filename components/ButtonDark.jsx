import "..//styles/ButtonDark.scss";

export default function ButtonDark({ type, onClick, buttonText }) {
  return (
    <button className="button-dark" type={type} onClick={onClick}>{buttonText}</button>
  )
}