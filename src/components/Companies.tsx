import React, { Component } from 'react'
import Acomodeo from '../assets/acomodeo.png'
import Finanzcheck from '../assets/finanzcheck.png'
import Homefully from '../assets/homefully.png'
import Habyt from '../assets/habyt.png'
import Amorelie from '../assets/amorelie.png'

import '../styles/Companies.scss'
import { Link } from 'react-router-dom'

export default class Companies extends Component {
    render() {
        return (
            <div className="Companies">
                <div className="Companies-container">
                    <Link to="/companies#Amorelie" className="Companies-image">
                        <img src={Amorelie} alt="" />
                    </Link>
                    <Link to="/companies#Homefully" className="Companies-image">
                        <img src={Homefully} alt="" />
                    </Link>
                    <Link to="/companies#Finanzcheck" className="Companies-image">
                        <img src={Finanzcheck} alt="" />
                    </Link>
                    <Link to="/companies#Habyt" className="Companies-image">
                        <img src={Habyt} alt="" />
                    </Link>
                    <Link to="/companies#Acomodeo" className="Companies-image">
                        <img src={Acomodeo} alt="" />
                    </Link>
                </div>
            </div>
        )
    }
}
