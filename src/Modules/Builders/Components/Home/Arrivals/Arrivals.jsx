import React from 'react'
import './Arrivals.css'
import { FaHeart } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Arrivals() {
    return (
        <div id="arrivals">
            <div className='orebi-arrivals'>
                <div className="orebi-arrivals__container">
                    <div className="orebi-arrivals__inner">
                        <div className="orebi-arrivals__top">
                            <div className="orebi-arrivals__top-title">
                                <h2 className='h2--black'>New Arrivals</h2>
                            </div>
                        </div>
                        <div className="orebi-arrivals__bottom">
                            <div className="orebi-arrivals__bottom-arrow__left">
                                <div className="orebi-arrivals__bottom-arrow__left-border">
                                    <FaArrowLeft />
                                </div>
                            </div>
                            <div className="orebi-arrivals__bottom-wrapper">
                                <div className="orebi-arrivals__bottom-wrapper__image">
                                    <div className="orebi-arrivals__bottom-wrapper__image-background">
                                        <img src="/src/assets/d07f00c7f8bf20e179ae.jpg" alt="" />
                                    </div>
                                    <div className="orebi-arrivals__bottom-wrapper__image-abc">
                                        <div className="orebi-arrivals__bottom-wrapper__image-abc__new">
                                            <p>New</p>
                                        </div>
                                        <div className="orebi-arrivals__bottom-wrapper__image-abc__btn">
                                            <div className="orebi-arrivals__bottom-wrapper__image-abc__btn-add">
                                                <div className="orebi-arrivals__bottom-wrapper__image-abc__btn-add__title">
                                                    <h4>Add to Wish List</h4>
                                                </div>
                                                <div className="orebi-arrivals__bottom-wrapper__image-abc__btn-add__icon">
                                                    <FaHeart />
                                                </div>
                                            </div>
                                            <div className="orebi-arrivals__bottom-wrapper__image-abc__btn-compare">
                                                <div className="orebi-arrivals__bottom-wrapper__image-abc__btn-compare__title">
                                                    <h4>Compare</h4>
                                                </div>
                                                <div className="orebi-arrivals__bottom-wrapper__image-abc__btn-compare__icon">
                                                    <FaUndoAlt />
                                                </div>
                                            </div>
                                            <div className="orebi-arrivals__bottom-wrapper__image-abc__btn-cart">
                                                <div className="orebi-arrivals__bottom-wrapper__image-abc__btn-cart__title">
                                                    <h4>Add to Cart</h4>
                                                </div>
                                                <div className="orebi-arrivals__bottom-wrapper__image-abc__btn-cart__icon">
                                                    <FaShoppingCart />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="orebi-arrivals__bottom-wrapper__content">
                                    <div className="orebi-arrivals__bottom-wrapper__content-left">
                                        <div className="orebi-arrivals__bottom-wrapper__content-left__title">
                                            <h3>Basic Crew Neck Tee</h3>
                                        </div>
                                        <div className="orebi-arrivals__bottom-wrapper__content-left__des">
                                            <p>Black</p>
                                        </div>
                                    </div>
                                    <div className="orebi-arrivals__bottom-wrapper__content-right">
                                        <div className="orebi-arrivals__bottom-wrapper__content-right__price">
                                            <p>$44.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="orebi-arrivals__bottom-arrow__right">
                                <div className="orebi-arrivals__bottom-arrow__right-border">
                                    <FaArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Arrivals