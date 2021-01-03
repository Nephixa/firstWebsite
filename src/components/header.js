import React from 'react'
import './header.scss'

function Header() {
    return (
        <header className="header">
            <div className="flex-container">
                {/* <div className='logo'> */}
                    <a id="logo" href="/" alt="homepage">KC</a>
                {/* </div> */}
                <nav className="navbar">
                    <a href="/">Projects</a>
                    <a href="/">About Me</a>
                    <a href="/">Contact Info</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
