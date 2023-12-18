import { Link } from 'react-router-dom'
import React, { Component, useState } from 'react'
import '../styles/App.scss'
import '../styles/Chip.scss'

import Hashtag from '../assets/hashtag.png'

type ChipProps = {
    title: string,
    backgroundColor: string,
    image?: string,
    color?: string
}

const stringToColour = (str: string) => {
    let hash = 0;
    str.split('').forEach(char => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash)
    })
    let colour = '#'
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff
      colour += value.toString(16).padStart(2, '0')
    }
    return colour
  }

const Chip = (props: ChipProps) => {
    return (
        <div className="Chip" style={{ backgroundColor: !!props.backgroundColor ? props.backgroundColor : stringToColour(props.title)}}>
            {!!props.image ? <img src={props.image} alt="The LinkedIn logo." /> : ''}
            <img src={Hashtag} alt="Hashtag SVG" style={{ filter: props.color === 'white' ? 'invert(1)' : 'invert(0)'}}/>
            <p style={{color: props.color || '#000'}}>{props.title}</p>
        </div>
    )
}

export default Chip