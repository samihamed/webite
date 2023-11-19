import { Link } from 'react-router-dom'
import React, { Component, useState } from 'react'
import '../styles/App.scss'
import '../styles/Header.scss'
import mediumLogo from '../assets/medium.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import Cutout from '../assets/cutout.png'

const Header = () => {
    return (
        <div className="Header">
            
            <nav>

                <Link to='/' className="normal-link Header-memoji">
                    <img src={Cutout} alt="" />
                </Link>

                <div className='Header-headline'>
                    
                    <Link to="/">
                        <h2>SAMI HAMED</h2>
                    </Link>
                    
                    <h2>Product & Software Developer | Engineering Manager</h2>

                    <div className='Header-quicklinks'>
                        <a href="https://linkedin.com/in/samihamed" target="_blank">
                            <img src={linkedin} alt="The LinkedIn logo" />
                        </a>
                        
                        <a href="https://github.com/samihamed" target="_blank">
                            <img src={github} alt="The Github logo" />
                        </a>
                        
                        <a href="https://samihamed.medium.com/" target="_blank">
                            <img src={mediumLogo} alt="The Medium logo" />
                        </a>
                    </div>
                    

                </div>

            </nav>
        </div>
    )
}

export default Header