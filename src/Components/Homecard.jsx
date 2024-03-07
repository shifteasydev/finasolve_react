import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "../Components/HomecardStyles.css";
import ValueAdd from "../Assets/new-regulation.svg";


export const Homecard = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2500 },
      items: 6,
    },
    superlargedesktop: {
      breakpoint: { max: 2400, min: 1024 },
      items: 6,
    },
    largedesktop: {
      breakpoint: { max: 2200, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1024 },
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
        infinite={true}
        loop={true}
        // centerMode={true}
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/E Trading Analysis.png" alt="" />
            <h2 className="Title">E-TRADING & ANALYTICS</h2>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/FS_and_FinTech_Tools.png" alt="" />
            <h2 className="Title">FINTECH & REGULATIONS</h2>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/Home Loan.png" alt="" />
            <h2 className="Title">Home Loans & Insurance</h2>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/accounting.png" alt="" />
            <h2 className="Title">Accounting & Audit</h2>
            <Link to={"./businessfunding"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/Business Funding.png" alt="" />
            <h2 className="Title">Business Funding</h2>
            <Link to={"/solutions/business-funding"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">Mergers and Acquisitions</h2>

            <Link to={"/solutions/Mergers-Acquisitionss"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/FS_and_FinTech_Tools.png" alt="" />
            <h2 className="Title">Financial Services</h2>
            <Link to={"/solutions/financial-services"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/business-startup.png" alt="" />
            <h2 className="Title">Startup Funding</h2>

            <Link to={"/solutions/startup-funding"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/business-consulting.png" alt="" />
            <h2 className="Title">Business Consulting</h2>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/IT SERVICE.png" alt="" />
            <h2 className="Title">IT Services & Consulting</h2>
            <Link to={"/solutions/it-service"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/Digital Transformation.png" alt="" />
            <h2 className="Title">Digital Transformation</h2>
            <Link to={"/solutions/digital-transformation"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/Digital Marketing.png" alt="" />
            <h2 className="Title">Digital Marketing</h2>

            <Link to={"/solutions/digital-marketing"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/Cloud_Computing.png" alt="" />
            <h2 className="Title">Generative AI, LLM, RPA</h2>
            <Link to={"/solutions/cloudcomputing"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/Big_Data_and_Analytics.png" alt="" />
            <h2 className="Title">Big Data and Analytics</h2>

            <Link to={"/solutions/bigData-analytics"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/Business-Intelligence.png" alt="" />
            <h2 className="Title">Business Intelligence</h2>
            <Link to={"/solutions/business-intelligence"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/Data sci.png" alt="" />
            <h2 className="Title">Data Science Engineering</h2>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/Saas.png" alt="" />
            <h2 className="Title">Private Cloud SaaS PaaS</h2>
            <Link to={"./solutions"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">AWS Cloud Engineering</h2>
            <Link to={"/solutions/awsCloudData-Engineering"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src={ValueAdd} alt="" />
            <h2 className="Title">Azure Cloud Engineering</h2>
            <Link to={"/solutions/azureCloudData-Engineering"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/Cloud Analysis.png"  alt="" />
            <h2 className="Title">Google Cloud and Analytics</h2>
            <Link to={"/solutions/googleCloud-Analytics"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/Devops.png" alt="" />
            <h2 className="Title">DevOps and AI/MLOps</h2>
            <Link to={"/solutions/aiandMLOPS-services"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/ecommerce.png" alt="" />
            <h2 className="Title">eCommerce & EPOS</h2>

            <Link to={"/solutions/epos"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/payment-gateway.png" alt="" />
            <h2 className="Title">Payment Gateway</h2>

            <Link to={"/solutions/paymentgateway"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="product-image" src="./Card-icons/ERP CRM.png" alt="" />
            <h2 className="Title">ERP, CRM and B2B Leads</h2>

            <Link to={"/solutions/erp-crm"}>
              <span>Read More...</span>
            </Link>
          </div>
        </div>

      </Carousel>
    </div>
  );
};
