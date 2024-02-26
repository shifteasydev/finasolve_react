import React from 'react';

import Navbar from '../Components/Navbar';
import AboutHero from '../Components/AboutHero';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/Scroll';
import ServiceHero from '../Assets/service.jpg';
// import RegulationHero from '../Assets/about-hero - Copy.jpg';

const Services = () => {
  return (
    <div>
<ScrollToTop/>
<Navbar/>
<AboutHero heading="Services" img={ServiceHero} details="Finsolve provides software products, services, consulting and staffing solutions for companies around the world."/>
<Footer/>

    </div>
  )
}

export default Services;