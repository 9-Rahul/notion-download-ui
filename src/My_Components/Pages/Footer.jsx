import React from 'react'
import '../Styles/Footer.css'
import logo from '../Assets/Icons/notion-logo.svg'
import discord from '../Assets/Icons/discord-icon.svg'
import xIcon from '../Assets/Icons/x-icon.svg'
import mailSvg from '../Assets/Icons/mail-icon.svg'
import linkedin from '../Assets/Icons/linkedin-icon.svg'
import youTubeIcon from '../Assets/Icons/you-tube-icon.svg'
import fbicon from '../Assets/Icons/fb-icon.svg'
import instaIcon from '../Assets/Icons/insta-icon.svg'

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="inner-footer-left">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="title-text"><h1>Notion</h1></div>
                    </div>

                    <div className="ftr-icns">
                        <img src={xIcon} alt="x-icon" />
                        <img src={linkedin} alt="linkedin-icon" />
                        <img src={youTubeIcon} alt="youTube-icon" />
                        <img src={instaIcon} alt="insta-icon" />
                        <img src={fbicon} alt="fb-icon" />
                    </div>

                    <div className="footer-info">
                        <div className="language-selector">
                            <select>
                                <option>English (US)</option>
                                <option>Turkish</option>
                                <option>Russian</option>
                            </select>
                        </div>
                        <div className="footer-text">Cookie settings</div>
                        <div className="footer-text">© 2025 Notion Labs, Inc.</div>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-columns">
                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li>About us</li>
                                <li>Careers</li>
                                <li>Security</li>
                                <li>Status</li>
                                <li>Terms & privacy</li>
                                <li>Your privacy rights</li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Download</h4>
                            <ul>
                                <li>iOS & Android </li>
                                <li>Mac & Windows</li>
                                <li>Calendar</li>
                                <li>Web Clipper</li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Resources</h4>
                            <ul>
                                <li>Help center</li>
                                <li>Pricing </li>
                                <li>Blog</li>
                                <li>Community</li>
                                <li>Integrations</li>
                                <li>Templates</li>
                                <li>Affiliates</li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Notion for</h4>
                            <ul>
                                <li>Enterprise</li>
                                <li>Small business</li>
                                <li>Personal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
