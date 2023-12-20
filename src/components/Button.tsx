import React, { Component } from 'react'
import '../styles/Button.scss'

const Button = (props:any) => {
    return (
        <div className={ (!!props.inverted ? 'Button-Inverted ' : '') + 'Button' }>

            { props.children }

        </div>
    )
}

export default Button
