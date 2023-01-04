import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div id="footer">
            <div className='orebi-footer'>
                <div className="orebi-footer__container">
                    <div className="orebi-footer__inner">
                        <div className="orebi-footer__top">
                            <div className="orebi-footer__top-left">
                                <div className="orebi-footer__top-left__menu">
                                    <div className="orebi-footer__top-left__menu-title">
                                        <h4 className='orebi-footer__top-left__menu-title__text'>Menu</h4>
                                    </div>
                                    <div className="orebi-footer__top-left__menu-content">
                                        <ul className='orebi-footer__top-left__menu-content__item text-gray--500'>
                                            <li>Home</li>
                                            <li>Shop</li>
                                            <li>About</li>
                                            <li>Contact</li>
                                            <li>Journal</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="orebi-footer__top-left__shop">
                                    <div className="orebi-footer__top-left__shop-title">
                                        <h4 className='orebi-footer__top-left__shop-title__text'>Shop</h4>
                                    </div>
                                    <div className="orebi-footer__top-left__shop-content">
                                        <ul className='orebi-footer__top-left__shop-content__item text-gray--500'>
                                            <li>Category 1</li>
                                            <li>Category 2</li>
                                            <li>Category 3</li>
                                            <li>Category 4</li>
                                            <li>Category 5</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="orebi-footer__top-left__help">
                                    <div className="orebi-footer__top-left__help-title">
                                        <h4 className='orebi-footer__top-left__help-title__text'>Help</h4>
                                    </div>
                                    <div className="orebi-footer__top-left__help-content">
                                        <ul className='orebi-footer__top-left__help-content__item text-gray--500'>
                                            <li>Privacy Policy</li>
                                            <li>Terms & Conditions</li>
                                            <li>Special E-shop</li>
                                            <li>Shipping</li>
                                            <li>Secure Payments</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="orebi-footer__top-center">
                                <div className="orebi-footer__top-center__contact">
                                    <div className="orebi-footer__top-center__contact-title">
                                        <h4 className="orebi-footer__top-center__contact-title__text">(052) 611-5711
                                            company@domain.com</h4>
                                    </div>
                                    <div className="orebi-footer__top-center__contact-address">
                                        <p className='orebi-footer__top-center__contact-address__des text-gray--500'>575 Crescent Ave. Quakertown, PA 18951</p>
                                    </div>
                                </div>
                            </div>
                            <div className="orebi-footer__top-right">
                                <div className="orebi-footer__top-right__logo">
                                    <h1 className='orebi-footer__top-right__logo-title'>OREBI</h1>
                                </div>
                            </div>
                        </div>
                        <div className="orebi-footer__bottom">
                            <div className="orebi-footer__bottom-left">
                                <div className="orebi-footer__bottom-left__face">
                                    <FaFacebookF />
                                </div>
                                <div className="orebi-footer__bottom-left__insta">
                                    <FaInstagram />
                                </div>
                            </div>
                            <div className="orebi-footer__bottom-right">
                                <h4 className="orebi-footer__bottom-right__year text-gray--500">2020 Orebi Minimal eCommerce Figma Template by Adveits</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;