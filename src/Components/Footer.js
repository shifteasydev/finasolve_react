import React from "react";
import "../Components/Footerstyles.css";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImMail3 } from "react-icons/im";
// import {TiLocation} from "react-icons/tb";
// import {SiGmail} from "react-icons/si";
import { FaMobile } from "react-icons/fa";
import Submitform from "../Components/FooterForm";
// import FooterImg from '../Assets/footer-back.jpg';
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      {/* <div className="footer-img">
            <img src={FooterImg} alt="footer-back" />
        </div> */}
      <div className="footer-wrapper">
        <div className="footer-heading">Contact Us</div>
        <div className="footer-body">
          <div className="footer-left">
            <div className="location">
              <h4>
                {" "}
                <HiLocationMarker
                  size={15}
                  style={{ color: "#fff", marginRight: ".5rem" }}
                />{" "}
                308 Hillcross Avenue, Morden, SM4 4EU, United Kingdom
              </h4>
            </div>
            <div className="phone">
              <h4>
                {" "}
                <BsFillTelephoneFill
                  size={15}
                  style={{ color: "#fff", marginRight: ".5rem" }}
                />{" "}
                <a href="tel:+44 203 718 3663">+44 203 718 3663</a>{" "}
              </h4>
            </div>
            <div className="mobile">
              <h4>
                {" "}
                <FaMobile
                  size={15}
                  style={{ color: "#fff", marginRight: ".5rem" }}
                />{" "}
                <a href="tel:+44 7375 290 550">+44 7375 290 550</a>{" "}
              </h4>
            </div>
            <div className="mail">
              <h4>
                {" "}
                <ImMail3
                  size={15}
                  style={{ color: "#fff", marginRight: ".5rem" }}
                />{" "}
                <a href="mailto: contactus@finasolve.com">
                  contactus@finasolve.com{" "}
                </a>
              </h4>
            </div>
            <div className="mail">
              <h4>
                {" "}
                <ImMail3
                  size={15}
                  style={{ color: "#fff", marginRight: ".5rem" }}
                />{" "}
                <a href="mailto: support@finasolve.com">
                  support@finasolve.com
                </a>
              </h4>
            </div>
          </div>
          <div className="footer-right">
            <Submitform />
          </div>
        </div>
        <div className="footer-copyrights">
          <div className="copyrights-text">
            <h5>Copyright © 2024. All Rights Reserved.</h5>
          </div>
          <div className="followus-logo">
            <div className="f-text">
              <h5>Follow us on</h5>
            </div>
            <div className="f-logo">
              <h5>
                <a href="https://www.facebook.com/">
                  <BsTwitter
                    size={20}
                    style={{ color: "#fff", marginRight: ".5rem" }}
                  />
                </a>
              </h5>
              <h5>
                <a href="https://www.facebook.com/">
                  <BsFacebook
                    size={20}
                    style={{ color: "#fff", marginRight: ".5rem" }}
                  />
                </a>
              </h5>
              <h5>
                <a href="https://www.facebook.com/">
                  <AiFillInstagram
                    size={20}
                    style={{ color: "#fff", marginRight: ".5rem" }}
                  />
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
