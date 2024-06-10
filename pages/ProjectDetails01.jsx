import Header from "../components/Header.jsx";
import Heading from "../components/Heading.jsx";
import ServiceDetails from "../components/ServiceDetails.jsx";
import serviceImage01 from "/local-shipping-services-image01.jpeg";
import serviceImage02 from "/service-details-image02.jpeg";
import localShippingIcon from "/we-do-icon05.png";
const text01 = <>{"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"}</>;
const text02 = <>{"Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."}</>;
const text03 = <>{"Sed ut perspiciatis, unde omnis iste natu volupta temaccu santium doloremque laudantium, totam rem quae ab illo inventore veritatis."}</>;
const text04 = <>{"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, doloremque laudantium."}</>;
const text05 = <>{"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis."}</>;

export default function ProjectDetails01() {
  return (
    <>
      <Header />
      <Heading 
        className={"heading"} 
        imageUrl={"/local-shipping-heading-bg.jpeg"}
        caption={"Project Details"}
        title={"Convenient Transportation"}
      />
      <ServiceDetails 
        imgSrc01={serviceImage01} imgAlt01={"Local Shipping"}
        iconSrc={localShippingIcon}
        title01={"Convenient Transportation"}
        text01={text01}
        text02={text02}
        title02={"Our Project Details"}
        text03={text03}
        imgSrc02={serviceImage02} imgAlt02={"Convoy of trucks on the road"}
        title03={"Why Was The 'Convenient Transportation' Created?"}
        text04={text04}
        text05={text05}
        src={"/video/service-details-video.mp4"}
      />
    </>
  );
}