import React from 'react';

import Navbar from '../../Components/Navbar';
import AboutHero from '../../Components/AboutHero';
import Footer from '../../Components/Footer';
import ScrollToTop from '../../Components/Scroll';
import RegulationHero from '../../Assets/office.jpg';

const CloudComputing = () => {
  return (
    <div>
    <ScrollToTop/>
    <Navbar/>
    <AboutHero heading="Cloud Computing" img={RegulationHero} details="Revolutionise the methods your compliance team manages the regulatory changes."/>
    <Footer/>
    
        </div>
  )
}

export default CloudComputing;