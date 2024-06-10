import "..//styles/FooterConteiner.scss";

export default function FooterConteiner({ children }) {
  return (
    <footer className="footer">
      <div className="conteiner">{children}</div>
    </footer>
  );
}