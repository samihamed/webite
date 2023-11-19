import { Link } from 'react-router-dom'
import React, { Component, useState } from 'react'
import '../styles/App.scss'
import '../styles/Tiles.scss'
import Cutout from '../assets/cutout.png'
import Chip from './Chip'
import LinkedIn from '../assets/linkedin.png'
import Hashtag from '../assets/hashtag.png'

const Tiles = () => {
    return (
        <div className="Tile">
            <div className="Tile-header">
                <img src={Cutout} alt="" />
                <h3>Sami Hamed</h3>
            </div>
            <div className="Tile-content">I help startups and scale-ups create engaging digital products, build effective software & product teams, and grow their business sustainably.</div>
            <div className="Chips">
                <a href="https://www.linkedin.com/in/samihamed/" target='_blank'>
                    <Chip title='LinkedIn' image={LinkedIn} backgroundColor='#d5bdaf'/>
                </a>
                <Chip title='Data' image={Hashtag} backgroundColor='#edafb8'/>
                <Chip title='Product' image={Hashtag} backgroundColor='#f7e1d7'/>
                <Chip title='Leadership' image={Hashtag} backgroundColor='#b0c4b1'/>
                <Chip title='Strategy' image={Hashtag} backgroundColor='#bcb8b1'/>
            </div>
        </div>
    )
}

export default Tiles