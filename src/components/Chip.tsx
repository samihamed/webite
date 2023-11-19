import { Link } from 'react-router-dom'
import React, { Component, useState } from 'react'
import '../styles/App.scss'
import '../styles/Chip.scss'

type ChipProps = {
    image?: string,
    title: string,
    backgroundColor: string,
}

const Chip = (props: ChipProps) => {
    return (
        <div className="Chip" style={{backgroundColor: props.backgroundColor}}>
            <img src={props.image} alt="The LinkedIn logo." />
            <p>{props.title}</p>
        </div>
    )
}

export default Chip