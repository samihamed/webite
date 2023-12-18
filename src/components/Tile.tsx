import { Link } from 'react-router-dom'
import React, { Component, useState } from 'react'
import '../styles/App.scss'
import '../styles/Tiles.scss'
import Cutout from '../assets/cutout.png'
import Chip from './Chip'
import LinkedIn from '../assets/linkedin.png'
import Hashtag from '../assets/hashtag.png'

import Post from '../assets/blog-post.svg'
import Podcast from '../assets/podcast.svg'
import Workshop from '../assets/workshop.svg'
import Music from '../assets/music.svg'

type TileProps = {
    backgroundColor: string,
    title: string,
    description: string,
    icon: string,
    width?: string,
    type?: string,
    hashtags?: Array<string>,
    link?: string
    image?: string
}

let returnIcon = (type: string) => {
    if (type === 'Post') return Post
    if (type === 'Podcast') return Podcast
    if (type === 'Workshop') return Workshop
    if (type === 'Music') return Music
}

const Tile = (props: TileProps) => {
    return (
        <div className="Tile" style={{
            backgroundColor: props.backgroundColor
        }}>

            <div className="Tile-details">
                
                <div className="Tile-header">
                    
                    {!!props.icon ? <img src={returnIcon(props.icon)} alt="Tile-specific icon" /> : <span></span>}
                    
                    <h3>{props.title}</h3>

                </div>
            
                <div className="Chips">
                    { !!props.hashtags ? props.hashtags.map((hashtag: string) => <Chip title={hashtag} backgroundColor='#fff'/>) : ''}
                </div>
                
            </div>
            
            { !!props.image
                ? <div className='Tile-details-image-container'><img src={props.image} alt="Image related to the blog post" /></div>
                : <p className="Tile-content">{props.description}</p>
            }
        
        </div>
    )
}

export default Tile