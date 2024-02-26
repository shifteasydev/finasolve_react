import React from 'react';
import Navbar from '../Components/Navbar';
import AboutHero from '../Components/AboutHero';
import AboutCard from '../Components/About-Card/AboutCard';
import AboutCardData from '../Components/AboutCardData';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/Scroll';
import AboutHeroImg from '../Assets/about-hero3.jpg';

const Contact = () => {
  return (
    <div>
    <div>
      <ScrollToTop/>
<Navbar/>
<AboutHero heading="About us" img={AboutHeroImg} details="Finasolve uses proprietary technology to solve some of the complex problems facing capital industry"/>
<AboutCard details={AboutCardData}/>
<Footer/>
    </div>
    </div>
  )
}

export default Contact