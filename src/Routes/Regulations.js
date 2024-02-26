import React from 'react';
import Navbar from '../Components/Navbar';
import AboutHero from '../Components/AboutHero';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/Scroll';
import RegulationHero from '../Assets/office.jpg';
// import RegulationHero from '../Assets/about-hero - Copy.jpg';

const Regulations = () => {
  return (
    <div>
<ScrollToTop/>
<Navbar/>
<AboutHero heading="Regulations" img={RegulationHero} details="Revolutionise the methods your compliance team manages the regulatory changes."/>
<Footer/>

    </div>
  )
}

export default Regulations;