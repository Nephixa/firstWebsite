import React from 'react'
import './hero.scss'
import degree from '../images/degree-hat.svg'
import location from '../images/location.svg'
import GithubLogo, {LinkedInLogo} from '../Icon'
import Particles from 'react-particles-js'
import particlesConfig from '../config/configParticles'

function Hero() {
    return (
        <div className="container">
            <Particles id="particles-js"
                params={particlesConfig}    
            />
            <div className="hero">
                <div className="description">
                    <p className="pre-intro">Hi, I'm</p>
                    <p className="name">KEVIN CAI</p>
                    <p className="degree">
                        <img src={degree} alt="degree"></img>   Bachelor of Adv. Computing @ USYD
                    </p>
                    <p className="location">
                        <img src={location} alt="location"></img>  Sydney, Australia
                    </p>
                        <nav className="icons">
                            <a href="https://github.com/Nephixa" target="_blank" rel="noopener noreferrer">
                                <GithubLogo className="link-logo" />
                            </a>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                                <LinkedInLogo className="link-logo" />
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

export default Hero;
