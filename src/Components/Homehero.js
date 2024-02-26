import React from 'react';
import '../Components/HomeheroStyles.css';
import HeroVideo from "../Assets/Homehero2.mp4";
import Typewriter from 'typewriter-effect';
// import TypewriterLoop from './loop';
// import { Link } from 'react-router-dom';





class Homehero extends React.Component {
    render() {
        return (
            <>
                <div className="hero-section">
                    <div className="hero-head">
                        <h2>INTELLIGENT AUTONOMOUS COMPUTING</h2>

                        <h1 className='type-text'>

                            <Typewriter
                                options={{
                                    strings: ['ENABLES MASSIVE', 'SCALABILITY'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />


                            {/* <Typewriter onInit={(typewriter) => {
                                typewriter.typeString("ENABLES MASSIVE").pauseFor(100).deleteAll().typeString("SCALABILITY").start();
                            }
                            }
                            /> */}
                        </h1>

                        {/* Demo Button */}
                        {/* <div className='button'>
                            <Link to="/contact-us" className='btn-primary margin-top'>Request Demo</Link>
                        </div> */}
                    </div>
                    <div className="hero-video">
                        <video muted loop autoPlay width="100%" height="100%" preload="auto">
                            <source src={HeroVideo} type="video/mp4" />

                        </video>
                    </div>
                </div>
            </>
        )
    }
}

export default Homehero;