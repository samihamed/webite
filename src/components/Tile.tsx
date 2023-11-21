import { Link } from 'react-router-dom'
import React, { Component, useState } from 'react'
import '../styles/App.scss'
import '../styles/Tiles.scss'
import Cutout from '../assets/cutout.png'
import Chip from './Chip'
import LinkedIn from '../assets/linkedin.png'
import Hashtag from '../assets/hashtag.png'

type TileProps = {
    backgroundColor: string,
    title: string,
    description: string,
    icon?: string,
    width?: string,
    type?: string,
    hashtags?: Array<string>,
    link?: string
    backgroundImage?: string
}

const Tile = (props: TileProps) => {
    return (
        <div className="Tile" style={{
            backgroundColor: props.backgroundColor,
            backgroundImage: Cutout || ''
        }}>
            
            <div className="Tile-header">
                
                {!!props.icon ? <img src={props.icon} alt="Tile-specific icon" /> : <span></span>}
                
                <h3>{props.title}</h3>

            </div>
            
            <div className="Tile-content">{props.description}</div>
            
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

export default Tile