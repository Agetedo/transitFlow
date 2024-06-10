/* eslint-disable react-refresh/only-export-components */
import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Services = React.lazy(() => import("../pages/Services"));
const Project = React.lazy(() => import("../pages/Project"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Blog = React.lazy(() => import("../pages/Blog"));
const Team = React.lazy(() => import("../pages/Team"));
const Pricing = React.lazy(() => import("../pages/Pricing"));
const Liecenses = React.lazy(() => import("../pages/Liecenses"));
const SeaTransport = React.lazy(() => import("../pages/SeaTransport"));
const Warehousing = React.lazy(() => import("../pages/Warehousing"));
const AirFright = React.lazy(() => import("../pages/AirFright"));
const LocalShipping = React.lazy(() => import("../pages/LocalShipping"));
const ProjectDetails01 = React.lazy(() => import("../pages/ProjectDetails01"));
const ProjectDetails02 = React.lazy(() => import("../pages/ProjectDetails02"));
const ProjectDetails03 = React.lazy(() => import("../pages/ProjectDetails03"));
const ProjectDetails04 = React.lazy(() => import("../pages/ProjectDetails04"));
const ProjectDetails05 = React.lazy(() => import("../pages/ProjectDetails05"));
const ProjectDetails06 = React.lazy(() => import("../pages/ProjectDetails06"));

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.ABOUTPAGE, element: <About /> },
    { path: PathConstants.SERVICESPAGE, element: <Services /> },
    { path: PathConstants.PROJECTPAGE, element: <Project /> },
    { path: PathConstants.CONTACTPAGE, element: <Contact /> },
    { path: PathConstants.SEATRANSPORTPAGE, element: <SeaTransport /> },
    { path: PathConstants.WAREHOUSINGPAGE, element: <Warehousing /> },
    { path: PathConstants.AIRFRIGHTPAGE, element: <AirFright /> },
    { path: PathConstants.LOCALSHIPPINGPAGE, element: <LocalShipping /> },
    { path: PathConstants.BLOGPAGE, element: <Blog /> },
    { path: PathConstants.TEAMPAGE, element: <Team /> },
    { path: PathConstants.PRICINGPAGE, element: <Pricing /> },
    { path: PathConstants.LIECENSESPAGE, element: <Liecenses /> },
    { path: PathConstants.PROJECTDETAILS01, element: <ProjectDetails01 /> },
    { path: PathConstants.PROJECTDETAILS02, element: <ProjectDetails02 /> },
    { path: PathConstants.PROJECTDETAILS03, element: <ProjectDetails03 /> },
    { path: PathConstants.PROJECTDETAILS04, element: <ProjectDetails04 /> },
    { path: PathConstants.PROJECTDETAILS05, element: <ProjectDetails05 /> },
    { path: PathConstants.PROJECTDETAILS06, element: <ProjectDetails06 /> },
]
export default routes;