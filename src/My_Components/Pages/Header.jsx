import React from 'react'
import '../Styles/Header.css'
import notionLogo from '../Assets/Icons/notion-logo.svg'
import arrowDown from '../Assets/Icons/icon-down.svg'
import arrowUp from '../Assets/Icons/arrow-up.svg'
import hamburger from '../Assets/Icons/hamburger.svg'

const Header = () => {
    return (
        <header className="header-outer">
            <div className="header-container">
                <div className="header-left">
                    <img src={notionLogo} alt="notion-logo" />
                </div>

                <div className="header-center">
                    <button><span>Notion</span><img className='arrow-down' src={arrowDown} alt="arrow-down" />
                        <img className='arrow-up' src={arrowUp} alt="arrow-up" /> </button>

                    <button><span>Mail</span></button>

                    <button><span>Calender</span></button>

                    <button><span>AI</span></button>

                    <button><span>Enterprise</span></button>

                    <button><span>Pricing</span></button>

                    <button><span>Explore</span><img className='arrow-down' src={arrowDown} alt="arrow-down" />
                        <img className='arrow-up' src={arrowUp} alt="arrow-up" /> </button>

                    <button><span>Request a demo</span></button>
                </div>

                <div className="header-right">
                    <button><span>Log in</span></button>
                    <span><span>Get Notion free</span></span>
                    <span><img src={hamburger} alt="hamburger-icon" /></span>
                </div>

            </div>
        </header>
    )
}

export default Header
