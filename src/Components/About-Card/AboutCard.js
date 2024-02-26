import React from 'react';
import '../About-Card/AboutcardStyles.css';
import '../AboutCardData';
// import LineIMG from '../../Assets/4th-banner.jpg';



const AboutCard = (props) => {
  return (
    <div className='about-hero'>
      {/* <img className='Outline-img' src={LineIMG} alt="line" /> */}
      {props.details.map((value,index)=>(
      <div className="about-wrapper" key={index}>
        <div className="card-about" >
          <div className="card-img">
            <img src={value.img} alt="exp" />
          </div>
          <div className="card-content">
            <h3 className='card-title'>{value.title}</h3>
            <p className='card-description'>{value.description}</p>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default AboutCard;