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
            <img src={Cutout} alt="Sami Hamed' logo" />
            <span>SAMI HAMED</span>
        </div>
    )
}

export default Header