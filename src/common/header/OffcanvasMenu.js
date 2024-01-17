import React from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FaFacebookF, FaLinkedinIn, FaBehance, FaPhone, FaFax, FaUnderline } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const OffcanvasMenu = ({offcanvasShow, offcanvasHide}) => {
    return (
        <Offcanvas show={offcanvasShow} onHide={offcanvasHide} placement="end" className="header-offcanvasmenu">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                {/* <form action="#" className="side-nav-search-form">
                    <div className="form-group">
                        <input type="text" className="search-field" name="search-field" placeholder="Search..." />
                        <button className="side-nav-search-btn"><i className="fas fa-search"></i></button>
                    </div>
                </form> */}
                <div className="row ">
                    {/* <div className="col-lg-5 col-xl-6">
                        <ul className="main-navigation list-unstyled">
                            <li><Link to={process.env.PUBLIC_URL + "/digital-agency"}>Digital Agency</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/creative-agency"}>Creative Agency</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/personal-portfolio"}>Personal Portfolio</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/home-startup"}>Home Startup</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/corporate-agency"}>Corporate Agency</Link></li>
                        </ul>
                    </div> */}
                    <div className="col-lg-7 col-xl-6">
                        <div className="contact-info-wrap">
                            <div className="contact-inner">
                                <address className="address">
                                    <span className="title">Contact Information</span>
                                    <div className="form-group">
                                    <button type="button" className="axil-btn btn-fill-primary btn-fluid btn-primary" onClick={() => window.location = 'mailto:kleeptoofficial@gmail.com'}>Click here to mail us</button>

        </div>
                                    {/* <p>Email :<br /> <h4><a style={{color: "#5956E9"}} href="mailto:kleeptoofficial@gmail.com">kleeptoofficial@gmail.com</a></h4></p> */}
                                </address>
                                {/* <address className="address">
                                    <span className="title">We're Available 24/7. Call Now.</span>
                                    <a href="tel:8884562790" className="tel"><FaPhone /> (888) 456-2790</a>
                                    <a href="tel:12125553333" className="tel"><FaFax /> (121) 255-53333</a>
                                </address> */}
                            </div>
                            <div className="contact-inner">
                                <h5 className="title">Find us here</h5>
                                <div className="contact-social-share">
                                    <ul className="social-share list-unstyled">
                                        {/* <li>
                                            <a href="https://facebook.com/"><FaFacebookF /></a>
                                        </li> */}

                                        
                                        <li><a href="https://twitter.com/kleeptoofficial" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a></li>
                                        <li><a href="https://www.instagram.com/kleeptoofficial/"  target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>

                                        {/* <Link to="https://twitter.com/kleeptoofficial"><FaXTwitter /></Link> */}
                                        
                                        {/* <li>
                                            <a href="https://www.behance.net/"><FaBehance /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffcanvasMenu;
