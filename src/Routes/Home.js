import React from 'react'
import Navbar from '../Components/Navbar';
import Homehero from '../Components/Homehero';
import Herocard, { Homecard } from '../Components/Homecard';
import Missioncard from '../Components/MisssionCard';
import IconCard from '../Components/IconCard';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/Scroll';



const Home = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <Homehero/>
      <Homecard />
      <Missioncard/>
      <IconCard/>
      <Footer/>
    </div>
  )
}

export default Home;