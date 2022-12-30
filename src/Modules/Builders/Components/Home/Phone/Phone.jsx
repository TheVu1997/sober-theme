import React from 'react'
import './Phone.css'

function Phone() {
    return (
        <div id="phone">
            <div className='orebi-phone'>
                <div className="orebi-phone__container">
                    <div className="orebi-phone__inner">
                        <div className="orebi-phone__center">
                            <div className="orebi-phone__center-image">
                                <img src="/src/assets/d07f00c7f8bf20e179ae.jpg" alt="" />
                            </div>
                            <div className="orebi-phone__center-content">
                                <div className="orebi-phone__center-content-wrapper">
                                    <div className="orebi-phone__center-content-wrapper__title">
                                        <h2 className='h2--white'>Phone of the year</h2>
                                    </div>
                                    <div className="orebi-phone__center-content-wrapper__number">
                                        <p className='text--white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                                    </div>
                                    <div className="orebi-phone__center-content-wrapper__btn btn--white">Shop Now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Phone