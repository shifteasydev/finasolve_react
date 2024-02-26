import React from 'react';
// import AboutHeroImg from '../Assets/about-hero3.jpg';
import '../Components/AboutheroStyles.css';

const AboutHero = (props) => {
    return (
        <div>
           
            <div className="about-herosection" >
                <div className="about-mask">
                    <img className="abouthero" src={props.img} alt="AboutHeroimg" />
                </div>
                <div className="about-content">
                    <h1> {props.heading}</h1>
                    <p>{props.details}</p>
                    {/* <p>Finasolve uses proprietary technology to solve some of the complex problems facing capital industry</p> */}
                </div>
            </div>
           
        </div>
    )
}

export default AboutHero;