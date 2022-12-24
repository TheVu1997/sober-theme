import React from 'react'
import { FaCarSide } from 'react-icons/fa'
import { FaRedoAlt } from 'react-icons/fa'
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
                                    <p className='info-warranty__icon-left icon--info'>2</p>
                                </div>
                                <div className="info-warranty__text">
                                    <p className='gray--500'>Two years warranty</p>
                                </div>
                            </div>
                            <div className="orebi-intro__info-ship">
                                <div className="info-ship__icon">
                                    <p className='info-ship__icon-center icon--info'><FaCarSide/></p>
                                </div>
                                <div className="info-ship__text">
                                    <p className='gray--500'>Free shipping</p>
                                </div>
                            </div>
                            <div className="orebi-intro__info-policy">
                                <div className="info-policy__icon">
                                    <p className='info-policy__icon-right icon--info'><FaRedoAlt/></p>
                                </div>
                                <div className="info-policy__text">
                                    <p className='gray--500'>Return policy in 30 days</p>
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