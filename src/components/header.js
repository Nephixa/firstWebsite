import React from 'react'
import './header.scss'

function Header() {
    return (
        <header className="header">
            <div className="flex-container">
                <div className='logo'>KC</div>
                <div className="navbar">
                    <div>About Me</div>
                    <div>Contact Info</div>
                </div>
                
            </div>
        </header>
    )
}

export default Header
