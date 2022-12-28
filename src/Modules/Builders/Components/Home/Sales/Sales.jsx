import React from 'react'
import './Sales.css'

function Sales() {
    return (
        <div id="sales">
            <div className='orebi-sales'>
                <div className="orebi-sales__container">
                    <div className="orebi-sales__inner">
                        <div className="orebi-sales__left">
                            <div className="orebi-sales__left-phones">
                                <div className="orebi-sales__left-phones__image">
                                    <img src="/src/assets/d07f00c7f8bf20e179ae.jpg" alt="" />
                                </div>
                                <div className="orebi-sales__left-phones__content">
                                    <div className="orebi-sales__left-phones__content-title">
                                        <h2 className='h2--white'>Phones Sale</h2>
                                    </div>
                                    <div className="orebi-sales__left-phones__content-number">
                                        <p className='text--white'>Up to <b className='percent--white'>30%</b> sale for all phones!</p>
                                    </div>
                                    <a className='orebi-sales__left-phones__content-btn btn--white' href="">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="orebi-sales__right">
                            <div className="orebi-sales__right-electronic">
                                <div className="orebi-sales__right-electronic__image">
                                    <img src="/src/assets/d07f00c7f8bf20e179ae.jpg" alt="" />
                                </div>
                                <div className="orebi-sales__right-electronic__content">
                                    <div className="orebi-sales__right-electronic__content-title">
                                        <h2 className=' h2--white'>Electronics Sale</h2>
                                    </div>
                                    <div className="orebi-sales__right-electronic__content-number">
                                        <p className='text--white'>Up to <b className='percent--white'>70%</b> sale for all electronics!</p>
                                    </div>
                                    <a className='orebi-sales__right-electronic__content-btn btn--white' href="">Shop Now</a>
                                </div>
                            </div>
                            <div className="orebi-sales__right-furniture">
                                <div className="orebi-sales__right-furniture__image">
                                    <img src="/src/assets/d07f00c7f8bf20e179ae.jpg" alt="" />
                                </div>
                                <div className="orebi-sales__right-furniture__content">
                                    <div className="orebi-sales__right-furniture__content-title">
                                        <h2 className='h2--white'>Furniture Offer</h2>
                                    </div>
                                    <div className="orebi-sales__right-furniture__content-number">
                                        <p className='text--white'>Up to <b className='percent--white'>50%</b> sale for all furniture items!</p>
                                    </div>
                                    <a className='orebi-sales__right-furniture__content-btn btn--white' href="">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales