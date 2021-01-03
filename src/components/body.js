import React from 'react'
import './body.scss'
import github from '../images/github-icon.svg'
import degree from '../images/degree-hat.svg'
import location from '../images/location.svg'
import GithubLogo from '../Icon'

function Body() {
    return (
        <div className="container">
            <div className="hero">
                <div className="description">
                    <p className="pre-intro">Hi, I'm</p>
                    <p className="name">KEVIN CAI</p>
                    <p className="degree">
                        <img src={degree} alt="degree"></img>   Bachelor of Adv. Computing @ USYD
                    </p>
                    <p className="location">
                        <img src={location} alt="location"></img>   Sydney, Australia
                    </p>
                        <nav className="icons">
                            <a href="https://github.com/Nephixa" target="_blank" rel="noopener noreferrer">
                                <GithubLogo className="link-logo" />
                            </a>
                        </nav>
                </div>
            </div>
            {/* <div className="projects">
                There
            </div> */}
        </div>
        
    )
}

export default Body
