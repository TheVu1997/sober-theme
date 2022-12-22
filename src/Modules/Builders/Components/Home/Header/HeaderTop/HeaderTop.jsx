import React from 'react'
import "./HeaderTop.css"

function HeaderTop() {
    return (
            <div className='orebi-header header-top'>
                <div className="orebi-header__container">
                    <div className="orebi-header__inner">
                        <div className="orebi-header__top-bar">
                            <div className="orebi-header__top-bar__logo">
                                <div className="orebi-header__top-bar__logo-img">
                                    <h1 className='logo'>OREBI</h1>
                                </div>
                            </div>
                            <div className="orebi-header__top-bar__menu">
                                <div className="orebi-header__top-bar__menu-items">
                                    <ul className='list-item list-item--menu'>
                                        <li><a href="">Home</a></li>
                                        <li><a href="">Shop</a></li>
                                        <li><a href="">About</a></li>
                                        <li><a href="">Contact</a></li>
                                        <li><a href="">Journal</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="orebi-header__top-bar__lan">
                                <div className="orebi-header__top-bar__lan-items">
                                    <ul className='list-item list-item--lan'>
                                        <li>EN</li>
                                        <li>RU</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HeaderTop