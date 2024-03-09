import React from "react";
import Navbar from "../Components/Navbar";
import SolutionHero from "../Components/AboutHero";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Scroll";
import SolutionHeroImg from "../Assets/service.jpg";
import Servicesdatas from "../Components/Services Page/Servicesdatas";
import Servicesbox from "../Components/Services Page/Servicesbox";

const Servicesmobile = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <SolutionHero
        heading="Services"
        img={SolutionHeroImg}
        details="Finsolve provides software products, services, consulting and staffing solutions for companies around the world."
      />
      <Servicesbox details={Servicesdatas}/>
      <Footer />
    </div>
  );
};

export default Servicesmobile;
