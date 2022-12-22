import React from 'react'
import './IntroBot.css'

function IntroBot() {
    return (
        <>
            <div className="orebi-intro intro-info">
                <div className="orebi-intro__container">
                    <div className="orebi-intro__inner">
                        <div className="orebi-intro__info">
                            <div className="orebi-intro__info-warranty">
                                <div className="info-warranty__icon">

                                </div>
                                <div className="info-warranty__text">
                                    <p>Two years warranty</p>
                                </div>
                            </div>
                            <div className="orebi-intro__info-ship">
                                <div className="info-ship__icon">

                                </div>
                                <div className="info-ship__text">
                                    <p>Free shipping</p>
                                </div>
                            </div>
                            <div className="orebi-intro__info-policy">
                                <div className="info-policy__icon">

                                </div>
                                <div className="info-policy__text">
                                    <p>Return policy in 30 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroBot