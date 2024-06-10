import Header from "../components/Header.jsx";
import Heading from "../components/Heading.jsx";
import BestPricing from "../components/BestPricing.jsx";
import Testimonials from "../components/Testimonials.jsx";
import WhyUsIndicators from "../components/WhyUsIndicators.jsx";

export default function Pricing() {
  return (
    <>
      <Header />
      <Heading 
        className={"heading"} 
        imageUrl={"/pricing-heading-bg.jpeg"}
        caption={"Pricing"}
        title={"Our Best Price"}
      />
      <BestPricing />
      <Testimonials />
      <WhyUsIndicators />
    </>
  );
}