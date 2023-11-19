import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Welcome.scss'

export default class Welcome extends Component {
    render() {
        return (
            <div className="Welcome">

                <h1><u>Data,</u> <u>Software</u> & <u>Product</u> | Making things impactful, useful & engaging.</h1>
                
                <div className="Welcome-details">
                    <div className="Welcome-block">
                        
                        <h3>In a nutshell 🌰</h3>
                        
                        <span>
                            I create engaging <Link to='/companies' className='background-blue navigation-link'>digital products</Link>,
                            build effective <Link to='/testimonials' className='background-red navigation-link'>teams & software</Link>,
                            and scale <Link to='/companies' className='background-purple navigation-link'>start-ups</Link> sustainably.
                            In the past years,I have built impactful products as a Web Developer, Product Owner and Head of Engineering.
                        </span>

                    </div>

                    <div className="Welcome-block">
                        
                        <h3>Capoeira since 1999 🥋</h3>
                        
                        <span>
                            After studying Capoeira and teaching kids in Hamburg, I started my own Capoeira school in 2012 in Frankfurt, Germany. Since then, I hosted martial arts festivals,
                            <Link to='/capoeira' className='background-violet navigation-link'>taught workshops,</Link> and played
                            <a href='https://instagram.com/capopoeira' rel="noopener noreferrer" target="_blank" className='background navigation-link'>percussion</a> music all over Europe.
                        </span>
                    
                    </div>

                    <div className="Welcome-block">
                        
                        <h3>What I'm up to 🧑‍💻</h3>
                        
                        <span>
                            Currently, I'm focused on CRO (conversion rate optimization) while building a great onsite e-commerce experience at<a
                                href="https://www.amorelie.com"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="background-green navigation-link"
                            >AMORELIE
                            </a> - Berlin's well-known e-commerce startup with the mission to provide people everywhere with sexual wellness. I'm based in Frankfurt am Main 📍

                            <br /><br />
                            
                            Also, I  <Link to='https://samihamed.medium.com/' target='_blank' className='background-rose navigation-link'>write</Link> about things.

                        </span>

                    </div>
                    
                </div>
            </div>
        )
    }
}