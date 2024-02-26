import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Finasolve LOGO.svg';
import '../Components/Navbarstyles.css';
// import { FaBars } from 'react-icons/fa'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleclick = () => setIsOpen(!isOpen);

    // const [click, setClick] = useState(false);
    // const toggleMenu = () => {
    //   setClick(!click);
    // }

    return (
        <div className='nav-bar'>
            <div className="nav-logo">
                <Link to="/">
                    <img src={logo} alt='Logo-img'></img>
                </Link>
            </div>
            <div className="nav-menu">
                <ul className={isOpen ? "menu-icon active" : "menu-icon   "} onClick={handleclick}>
                    {<p className='bar '></p>}
                    {/* <li ><FaBars size={30} /></li> */}
                </ul>
                <ul className={isOpen ? 'nav-item active' : 'nav-item'}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li className='mobile-view'>
                        <Link to="/solutions">Solutions</Link>
                    </li>


                    <div className="dropdown-menu web-view">
                        <li className="dropdown-button">Solution</li>


                        <ul className="dropdown-list">
                            <li><Link to="/solutions/business-funding">Business Funding</Link></li>
                            <li><Link to="/solutions/financial-services">Financial Services</Link></li>
                            <li><Link to="/solutions/startup-funding">Startup Funding</Link></li>
                            <li><Link to="/solutions/business-consulting">Business Consulting</Link></li>
                            <li><Link to="/solutions/it-service">IT Services</Link></li>
                            <li><Link to="/solutions/digital-transformation">Digital Transformation</Link></li>
                            <li><Link to="/solutions/digital-marketing">Digital Marketing</Link></li>
                            <li><Link to="/solutions/cloud-computing">Cloud Computing</Link></li>
                            <li><Link to="/solutions/bigData-analytics">Big Data and Analytics</Link></li>
                            <li><Link to="/solutions/business-intelligence">Business Intelligence</Link></li>
                            <li><Link to="/solutions/azureCloudData-Engineering">Azure Cloud Data Engineering</Link></li>
                            <li><Link to="/solutions/awsCloudData-Engineering">AWS Cloud Data Engineering </Link></li>
                            <li><Link to="/solutions/googleCloud-Analytics">Google Cloud and Analytics</Link></li>
                            <li><Link to="/solutions/aiandMLOPS-services">AI and MLOPS services</Link></li>
                            <li><Link to="/solutions/epos">EPOS</Link></li>
                            <li><Link to="/solutions/paymentgateway">Payment Gateway</Link></li>
                            <li><Link to="/solutions/erp-crm">ERP and CRM</Link></li>
                            <li><Link to="/solutions/Mergers-Acquisitions">Mergers and Acquisitions</Link></li>
                        </ul>

                    </div>
                    {/* <div className="dropdown-menu">
                        <li className="dropdown-button" onClick={toggleMenu}>Solution</li>
                        {click && (

                        <ul className="dropdown-list">
                            <li><Link to="/about-us">About US</Link></li>
                            <li><Link to="/about-us">About US</Link></li>
                            <li><Link to="/about-us">About US</Link></li>
                        </ul>
                         )}
                    </div> */}




                    <li>
                        <Link to="/regulations">Regulations</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/news-blogs">News & Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                    
                        <div className="login-btn">
                            <Link to="/login" className='btn-primary '>Login</Link>
                        </div>
                   
                </ul>


            </div>


        </div>
    )
}


export default Navbar;