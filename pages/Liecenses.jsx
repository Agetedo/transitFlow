import Header from "../components/Header.jsx";
import Heading from "../components/Heading.jsx";
import AssetsLiecenses from "../components/AssetsLiecenses.jsx";

export default function Liecenses() {
  return (
    <>
      <Header />
      <Heading 
        className={"heading"} 
        imageUrl={"/licenses-heading-bg.jpeg"}
        caption={"Licenses"}
        title={"All Assets Liecenses"}
      />
      <AssetsLiecenses />
    </>
  );
}