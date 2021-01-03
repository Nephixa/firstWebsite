import React from 'react'
import './body.scss'
import github from '../images/github-icon.svg'
import degree from '../images/degree-hat.svg'
import location from '../images/location.svg'

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
                    <div class="icons">
                        <img src={github} alt="github"></img>
                    </div>
                </div>
            </div>
            <div className="projects">
                There
            </div>
        </div>
        
    )
}

export default Body
