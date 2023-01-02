import React from 'react'
import './Special.css'

function Special() {
    return (
        <div id="special">
            <div className='orebi-special'>
                <div className="orebi-special__container">
                    <div className="orebi-special__inner">
                        <div className="orebi-special__top">
                            <div className="orebi-special__top-title">
                                <h2 className='h2--black'>Special Offers</h2>
                            </div>
                        </div>
                        <div className="orebi-special__bottom">
                                <div className="orebi-special__bottom-wrapper">
                                    <div className="orebi-special__bottom-wrapper__image">
                                        <div className="orebi-special__bottom-wrapper__image-background">
                                            <img src="/src/assets/d07f00c7f8bf20e179ae.jpg" alt="" />
                                        </div>
                                        <div className="orebi-special__bottom-wrapper__image-abc">
                                            <div className="orebi-special__bottom-wrapper__image-abc__new">
                                                <p>New</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="orebi-special__bottom-wrapper__content">
                                        <div className="orebi-special__bottom-wrapper__content-left">
                                            <div className="orebi-special__bottom-wrapper__content-left__title">
                                                <h3>Basic Crew Neck Tee</h3>
                                            </div>
                                            <div className="orebi-special__bottom-wrapper__content-left__des">
                                                <p>Black</p>
                                            </div>
                                        </div>
                                        <div className="orebi-special__bottom-wrapper__content-right">
                                            <div className="orebi-special__bottom-wrapper__content-right__price">
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

export default Special