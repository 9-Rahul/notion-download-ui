import React from 'react'
import '../Styles/Download.css'
import metalabIcon from '../Assets/Images/metalab-logo.avif'
import landingPgNotes from '../Assets/Images/landing-pages-notes.avif'
import windIcon from '../Assets/Icons/windows-icon.svg'
import appleIcon from '../Assets/Icons/apple-icon.svg'


const Download = () => {
    return (
        <section className="download-outer">
            <div className="download-inner">
                <div className="quotes-container">
                    <div className="quote-title"> <p>"We got rid of nearly a dozen different tools because of what Notion does for us."</p> </div>
                    <figcaption><img style={{ height: "36px", width: "auto" }} src={metalabIcon} alt="" /> Justin Watt  <br /> Director of Ops & Marketing, Metalab</figcaption>
                </div>

                <img className='landingPgImg' src={landingPgNotes} alt="landing-page-notes-img" />

            </div>
            <div className="download-section">
                <h1>Download Notion for desktop</h1>
                <h2 className="download-subtitle">A faster, more focused experience awaits.</h2>

                <div className="download-btns">
                    <button className="btn"><img src={appleIcon} alt="apple-icon" /> Download for macOS (Universal)</button>
                    <button className="btn"><img src={appleIcon} alt="apple-icon" /> Download for macOS (Apple Silicon)</button>
                    <button className="btn"><img src={appleIcon} alt="apple-icon" /> Download for macOS (Intel-based Macs)</button>
                    <button className="btn"><img src={windIcon} alt="windows-icon" /> Download for Windows (x64)</button>
                    <button className="btn"><img src={windIcon} alt="windows-icon" /> Download for Windows (Arm / Arm64)</button>
                </div>
            </div>
        </section>
    )
}

export default Download
