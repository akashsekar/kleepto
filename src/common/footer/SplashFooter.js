import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SplashFooter = () => {
    return (
        <footer className="footer-area splash-footer">
            <div className="container">
                <div className="footer-bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                        <div className="footer-copyright">
                            <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://kleepto.com/">Kleepto</a>.</span>
                        </div>
                        </div>
                        <div className="col-lg-2">
                        <ul className="footer-social list-unstyled">
                            {/* <li><Link to="https://facebook.com/"><FaFacebookF /></Link></li> */}
                            {/* <li><Link to="https://twitter.com/kleeptoofficial"><FaXTwitter /></Link></li> */}
                            <li><a href="https://twitter.com/kleeptoofficial" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a></li>
                            <li><a href="https://www.instagram.com/kleeptoofficial/"  target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                        </ul>
                        </div>
                        <div className="col-lg-5">
                        <div className="footer-bottom-link">
                            <ul className="list-unstyled">
                                {/* <li><a href="https://themeforest.net/user/axilthemes/portfolio">More Themes</a></li> */}
                                <li><Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default SplashFooter;