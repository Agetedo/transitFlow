import Header from "../components/Header.jsx";
import Heading from "../components/Heading.jsx";
import Transporters from "../components/Transporters.jsx";
import OurVision from "../components/OurVision.jsx";
import ClientsGallery from "../components/ClientsGallery.jsx";

export default function Team() {
  return (
    <>
      <Header />
      <Heading 
        className={"heading"} 
        imageUrl={"/team-heading-bg.jpeg"}
        caption={"Team"}
        title={"Our Team"}
      />
      <Transporters />
      <OurVision />
      <ClientsGallery />
    </>
  );
}