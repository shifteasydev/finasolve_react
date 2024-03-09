import React from 'react';
import Navbar from '../Components/Navbar';
import SolutionHero from '../Components/AboutHero';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/Scroll';
import SolutionHeroImg from '../Assets/service.jpg';
import SolutionIcon from '../Components/Solution page/SolutionIcon';
import SolutionIconData from '../Components/Solution page/SolutionIconData'
// import RegulationHero from '../Assets/about-hero - Copy.jpg';

const solution = () => {
  return (
    <div>
      <ScrollToTop/>
<Navbar/>
<SolutionHero heading="Solutions" img={SolutionHeroImg} details="Finsolve provides software products, services, consulting and staffing solutions for companies around the world."/>
<SolutionIcon  details={SolutionIconData}/>
<Footer/>
    </div>
  )
}

export default solution;