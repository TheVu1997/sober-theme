import React from 'react'
import './BestSeller.css'
import { FaHeart } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function BestSeller() {
    return (
        <div id="bestseller">
            <div className='orebi-bestseller'>
                <div className="orebi-bestseller__container">
                    <div className="orebi-bestseller__inner">
                        <div className="orebi-bestseller__top">
                            <div className="orebi-bestseller__top-title">
                                <h2 className='h2--black'>Our bestsellers</h2>
                            </div>
                        </div>
                        <div className="orebi-bestseller__bottom">
                                <div className="orebi-bestseller__bottom-wrapper">
                                    <div className="orebi-bestseller__bottom-wrapper__image">
                                        <div className="orebi-bestseller__bottom-wrapper__image-background">
                                            <img src="/src/assets/d07f00c7f8bf20e179ae.jpg" alt="" />
                                        </div>
                                        <div className="orebi-bestseller__bottom-wrapper__image-abc">
                                            <div className="orebi-bestseller__bottom-wrapper__image-abc__new">
                                                <p>New</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="orebi-bestseller__bottom-wrapper__content">
                                        <div className="orebi-bestseller__bottom-wrapper__content-left">
                                            <div className="orebi-bestseller__bottom-wrapper__content-left__title">
                                                <h3>Basic Crew Neck Tee</h3>
                                            </div>
                                            <div className="orebi-bestseller__bottom-wrapper__content-left__des">
                                                <p>Black</p>
                                            </div>
                                        </div>
                                        <div className="orebi-bestseller__bottom-wrapper__content-right">
                                            <div className="orebi-bestseller__bottom-wrapper__content-right__price">
                                                <p>$44.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSeller