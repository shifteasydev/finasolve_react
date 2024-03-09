import React from "react";
import { Link } from "react-router-dom";
import "./Servicesdatas";
import "../Solution page/SolutionIconStyles.css";

const Servicesbox = (props) => {
  return (
    <div className="solution-page">
      <div className="Sol-title">Choose Your Solution</div>
      <div className="solution-wrapper">
        {props.details.map((value, index) => (
          <Link to={value.link} className="solution-card" key={index}>
            <img className="solution-img" src={value.solIcon} alt="Fund" />
            <p className="solution-name">{value.solTitle}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Servicesbox;
