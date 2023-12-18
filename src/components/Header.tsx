import { Link } from 'react-router-dom'
import React, { Component, useState } from 'react'
import '../styles/App.scss'
import '../styles/Header.scss'
import Cutout from '../assets/cutout.png'
import LinkedIn from '../assets/linkedin.png'
import Medium from '../assets/medium.png'
import Github from '../assets/github.png'
import Threads from '../assets/threads.png'
import Instagram from '../assets/instagram.png'

import '../styles/App.scss'
import '../styles/Header.scss'
import Logo1 from '../assets/memoji-1.png'
import Logo2 from '../assets/memoji-2.png'
import Logo3 from '../assets/memoji-3.png'
import Logo4 from '../assets/memoji-4.png'
import Logo5 from '../assets/memoji-5.png'
import Logo6 from '../assets/memoji-6.png'
import Logo7 from '../assets/memoji-7.png'
import Logo8 from '../assets/memoji-8.png'
import mediumLogo from '../assets/medium.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

const Memojis = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
]

const Header = () => {
    let Memoji = Memojis[Math.floor(Math.random() * Memojis.length)]

    return (
        <div className="Header">
            <div className="Header">

                {/* <h1>Sami Hamed | Product & Software Developer</h1> */}

                <nav>

                    <Link to='/' className="normal-link Header-memoji">
                        {/* <Logo /> */}
                        <img src={Memoji} alt="" />
                    </Link>

                    <div className='Header-headline'>
                        
                        <Link to="/">
                            <h1>SAMI HAMED</h1>
                        </Link>
                        
                        <h2>Product & Software Developer | Engineering Manager</h2>
                        

                    </div>

                </nav>
                </div>

            <div className='Header-sub'>
                <div className="Header-container-socials">
                    <a href="https://www.instagram.com/capopoeira/" target="_blank" className="Welcome-greeting-container-social">
                        <img src={Instagram} alt="Link to my Instagram page" />
                    </a>
                    <a href="https://www.linkedin.com/in/samihamed/" target="_blank" className="Welcome-greeting-container-social">
                        <img src={LinkedIn} alt="Link to my LinkedIn page" />
                    </a>
                    <a href="https://www.linkedin.com/in/samihamed/" target="_blank" className="Welcome-greeting-container-social">
                        <img src={Medium} alt="Link to my LinkedIn page" />
                    </a>
                    <a href="https://www.threads.net/@samedihamedi" target="_blank" className="Welcome-greeting-container-social">
                        <img src={Threads} alt="Link to my Threads page" />
                    </a>
                    <a href="https://www.linkedin.com/in/samihamed/" target="_blank" className="Welcome-greeting-container-social">
                        <img src={Github} alt="Link to my LinkedIn page" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header