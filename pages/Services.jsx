import Header from "../components/Header.jsx";
import Heading from "../components/Heading.jsx";
import WeDo from "../components/WeDo.jsx";
import OurVision from "../components/OurVision.jsx";
import ClientsGallery from "../components/ClientsGallery.jsx";
import Goodness from "../components/Goodness.jsx";
import Testimonials from "../components/Testimonials.jsx";
import WhyUsIndicators from "../components/WhyUsIndicators.jsx";

export default function Services() {
  return (
    <>
      <Header />
      <Heading 
        className={"heading"} 
        imageUrl={"/services-heading-bg.jpeg"}
        caption={"Services"}
        title={"Our Logistics Service"}
      />
      <WeDo className={"we-do"} />
      <OurVision />
      <ClientsGallery />
      <Goodness />
      <Testimonials />
      <WhyUsIndicators />
    </>
  );
}