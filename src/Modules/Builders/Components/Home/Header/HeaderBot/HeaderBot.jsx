import React from 'react'
import "./Headerbot.css"
import { FaGripLines } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

function HeaderBot() {
    return (
            <div className="orebi-header header-bot">
                <div className="orebi-header__container">
                    <div className="orebi-header__inner">
                        <div className="orebi-header__bot-bar">
                            <div className="orebi-header__bot-bar__category">
                                <div className="orebi-header__bot-bar__category-icon">
                                    <FaGripLines size='1em'/>
                                </div>
                                <div className="orebi-header__bot-bar__category-text">
                                    <h3 className='category-text__title'>Shop by Category</h3>
                                </div>
                            </div>
                            <div className="orebi-header__bot-bar__search">
                                <div className="orebi-header__bot-bar__search-input">
                                    <input type="text" placeholder='Search Products' />
                                </div>
                                <div className="orebi-header__bot-bar__search-icon">
                                    <FaSearch/>
                                </div>
                            </div>
                            <div className="orebi-header__bot-bar__info">
                                <div className="orebi-header__bot-bar__info-user">
                                    <FaUser/>
                                    <FaCaretDown/>
                                </div>
                                <div className="orebi-header__bottom-bar__info-cart">
                                    <FaShoppingCart/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HeaderBot