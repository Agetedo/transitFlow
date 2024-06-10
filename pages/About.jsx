import Header from "../components/Header.jsx";
import Heading from "../components/Heading.jsx";
import AboutUs from "../components/AboutUs.jsx";
import WeDo from "../components/WeDo.jsx";
import BestPricing from "../components/BestPricing.jsx";
import Testimonials from "../components/Testimonials.jsx";
import TeamMembers from "../components/TeamMembers.jsx";
import ClientsGallery from "../components/ClientsGallery.jsx";
import Faq from "../components/Faq.jsx";

export default function About() {
  return (
   <>
      <Header />
      <Heading 
        className={"heading"} 
        imageUrl={"/about-heading-bg.jpeg"}
        caption={"About Us"}
        title={"About Our Logistics"}
      />
      <AboutUs />
      <WeDo className={"we-do"} />
      <BestPricing />
      <Testimonials />
      <TeamMembers />
      <ClientsGallery />
      <Faq />
    </>
  );
} 