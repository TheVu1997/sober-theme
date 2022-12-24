import React from 'react'
import './IntroTop.css'

function IntroTop() {
    return (
        <>
            <div className="orebi-intro intro-image" >
                <div className="orebi-intro__container">
                    <div className="orebi-intro__inner inner-image">
                        <div className="orebi-intro__image">
                            <div className="orebi-intro__image-slide">
                                <div className="orebi-intro__image-slide__background">
                                    <img src="/src/assets/d07f00c7f8bf20e179ae.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="orebi-intro__content" >
                            <div className="orebi-intro__content-left">
                                <div className="orebi-intro__content-left__title">
                                    <h1>Final Offer</h1>
                                </div>
                                <div className="orebi-intro__content-left__des">
                                    <p className='orebi-intro__content-left__des-sale gray--500'>Up to <b>50%</b> sale for all furniture items!</p>
                                </div>
                                    <a className='orebi-intro__content-left__btn-shop' href="">Shop Now</a>
                            </div>
                            <div className="orebi-intro__content-right">
                                <div className="orebi-intro__content-right__title">
                                    <h1></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroTop