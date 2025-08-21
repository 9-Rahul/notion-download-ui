import React from 'react'
import '../Styles/Banner.css'
import bannerImg from '../Assets/Images/downloads-hero-windows.png'
import windIcon from '../Assets/Icons/windows-icon.svg'
import microsofticon from '../Assets/Icons/dwnld-for-microsoft.svg'

const Banner = () => {
    return (
        <section className="banner-outer">
            <div className="banner-inner">
                <div className="banner-left">

                    <h1 className="banner-title">Download the Notion desktop app for a faster experience</h1>

                    <div className="banner-para"><span>Fast and minimal. Work without distractions.</span></div>
                    <div className="banner-btns-container">
                        <button ><img src={windIcon} alt="" />Download for Windows</button>
                        <button>
                            <img className='microsoft-icon' src={microsofticon} alt="microsoft-icon" />
                        </button>
                    </div>
                </div>
                <div className="banner-right">
                    <img src={bannerImg} alt="banner-img" className="banner-img" />
                </div>

            </div>

        </section>
    )
}

export default Banner
