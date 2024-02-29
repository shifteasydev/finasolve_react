import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "../Components/HomecardStyles.css";
import ValueAdd from "../Assets/04.png";

export const Homecard = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="homeCard">
      <h1 className="h1-head">Our Solutions</h1>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        ssr={true}
        loop={true}
      >
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">E-TRADE ANALYTICS</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">NEW🪄</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">FINTECH REGULATIONS</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title"></h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">Business Funding</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">Financial Services</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">Startup Funding</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">Business Consulting</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">IT Services</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">Digital Transformation</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">Digital Marketing</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">Cloud Computing</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">Big Data and Analytics</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">Business Intelligence</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">Azure Cloud Data Engineering</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">AWS Cloud Data Engineering</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">Google Cloud and Analytics</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">AI and MLOPS services</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">EPOS</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">Payment Gateway</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">ERP and CRM</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <span className="tags">Hot🔥</span>
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">Mergers and Acquisitions</h2>
            <p className="subdata">This is a product description.</p>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
