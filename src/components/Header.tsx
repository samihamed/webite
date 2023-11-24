import { Link } from 'react-router-dom'
import React, { Component, useState } from 'react'
import '../styles/App.scss'
import '../styles/Header.scss'
import Cutout from '../assets/cutout.png'
import LinkedIn from '../assets/linkedin.png'
import Medium from '../assets/medium.png'
import Github from '../assets/github.png'

const Header = () => {
    return (
        <div className="Header">
            <div className="Header-Sami">
                <img src={Cutout} alt="Sami Hamed's logo" />
                <h1>| SAMI HAMED</h1>
            </div>

            <div className='Header-sub'>
                <div className="Header-container-socials">
                    <a href="https://www.linkedin.com/in/samihamed/" className="Welcome-greeting-container-social">
                        <img src={LinkedIn} alt="Link to my LinkedIn page" />
                    </a>
                    <a href="https://www.linkedin.com/in/samihamed/" className="Welcome-greeting-container-social">
                        <img src={Medium} alt="Link to my LinkedIn page" />
                    </a>
                    <a href="https://www.linkedin.com/in/samihamed/" className="Welcome-greeting-container-social">
                        <img src={Github} alt="Link to my LinkedIn page" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header