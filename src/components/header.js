import { Link } from 'react-router-dom';
import React from 'react'
import './header.scss'

function Header() {
    return (
        <header className="header">
            <div className="flex-container">
                <Link to="/" id="logo">KC</Link>
                <nav className="navbar">
                    <Link to="/projects">PROJECTS</Link>
                    <Link to="/about">ABOUT ME</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;
