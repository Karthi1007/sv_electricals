import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assert/images/logo.jpg";

export const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <div>
            {/* =========================
                EXISTING DESKTOP HEADER
            ========================== */}
            <section id="header-sticky" className={`si__header__area custom-header ${isScrolled ? "custom-header-scrolled" : ""}`}>
                <div className="container custom__container">
                    <div className="row align-items-center">
                        {/* Logo */}
                        <div className="col-lg-3 col-md-6 col-7">
                            <div className="si__header__logo custom-header-logo">
                                <Link to="/">
                                    <img className="header_logo" src={LogoImg} alt="Company Logo" />
                                </Link>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="col-lg-9 col-md-6 col-5">
                            <div className="custom-header-right">
                                <nav className="custom-desktop-navigation">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About Us</Link></li>
                                        {/* <li><Link to="/team">Team</Link></li> */}
                                        <li><Link to="/gallery">Gallery</Link></li>
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/projects">Projects</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>

                                {/* Quote Button */}
                                <Link to="/contact" className="custom-header-quote">
                                    <span>Get a Quote</span>
                                    <span className="quote-arrow">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* =====================================
                MOBILE MENU BUTTON
                ONLY FOR MOBILE
            ====================================== */}
            <button
                type="button"
                className={`custom-mobile-menu-button ${isScrolled ? "custom-mobile-button-scrolled" : ""
                    }`}
                onClick={() => setMobileMenuOpen(true)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>


            {/* =====================================
                MOBILE OVERLAY
            ====================================== */}
            {mobileMenuOpen && (
                <div className="custom-mobile-overlay" onClick={closeMobileMenu}></div>
            )}
            {/* =====================================
                MOBILE MENU
            ====================================== */}

            <section className={`custom-mobile-menu ${mobileMenuOpen ? "custom-mobile-menu-open" : ""}`}>
                <div className="custom-mobile-menu-inner">
                    {/* Mobile Menu Header */}
                    <div className="custom-mobile-menu-header">
                        <Link to="/" onClick={closeMobileMenu}>
                            <img src={LogoImg} alt="logo" className="custom-mobile-logo"/>
                        </Link>
                        <button type="button" className="custom-mobile-close" onClick={closeMobileMenu}> × </button>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="custom-mobile-navigation">
                        <ul>
                            <li><Link to="/" onClick={closeMobileMenu}> Home </Link></li>
                            <li><Link to="/about" onClick={closeMobileMenu}> About Us </Link></li>
                            {/* <li> <Link to="/team" onClick={closeMobileMenu}> Team </Link></li> */}
                            <li><Link to="/gallery" onClick={closeMobileMenu}> Gallery </Link></li>
                            <li><Link to="/services" onClick={closeMobileMenu}> Services </Link></li>
                            <li><Link to="/projects" onClick={closeMobileMenu}> Projects </Link></li>
                            <li><Link to="/contact" onClick={closeMobileMenu}> Contact </Link></li>
                        </ul>
                    </nav>
                </div>
            </section>

            {/* =====================================
                YOUR OTHER EXISTING SECTIONS
            ====================================== */}
            <section className="xs-sidebar-group info-group">
                <div className="dt-overlay bt-black"></div>
                <div className="dt-sidebar-widget">
                    <div className="sidebar-container">
                        <div className="widget-top">
                            <a href="#" className="close"> X </a>
                        </div>
                        <div className="sidebar-textwidget">
                            <section className="sidebar-info-contents">
                                <div className="content-inner">
                                    <div className="logo">
                                        <a href="/">
                                            <img src="assets/images/logo/logo__white.png" alt=""/>
                                        </a>
                                    </div>

                                    <div className="content-text">
                                        <h2>About Us</h2>
                                        <p className="text-white">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    <div className="contact-info">
                                        <h2>Contact Us</h2>
                                        <ul>
                                            <li>
                                                <i className="fa-light fa-location-dot"></i>
                                                Door No.:11 &12, Shop No.: 9, Second Floor C.P Nayanar Balaji Complex, Kaleeswara Mill Road, Ram Nagar Post, Coimbatore - 641009.
                                            </li>
                                            <li>
                                                <i className="fa-light fa-phone"></i>
                                                <a href="tel:78458 73218">
                                                    78458 73218
                                                </a>
                                            </li>
                                            <li>
                                                <i className="fa-light fa-envelope"></i>
                                                <a href="mailto:svelectricalscbe12@gmail.com">
                                                    svelectricalscbe12@gmail.com
                                                </a>
                                            </li>

                                        </ul>

                                    </div>

                                </div>

                            </section>

                            <div className="social-icon pt-40">

                                <ul>

                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="fab fa-pinterest"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};