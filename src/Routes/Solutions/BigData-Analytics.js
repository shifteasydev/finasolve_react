import React from "react";

import Navbar from "../../Components/Navbar";
import AboutHero from "../../Components/AboutHero";
import Footer from "../../Components/Footer";
import ScrollToTop from "../../Components/Scroll";
import RegulationHero from "../../Assets/office.jpg";

const BigDataAnalytics = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <AboutHero
        heading="Big Data Analytics"
        img={RegulationHero}
        details="Revolutionise the methods your compliance team manages the regulatory changes."
      />
      <Footer />
    </div>
  );
};

export default BigDataAnalytics;
