import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Arrow from '../assets/arrow.svg'

import RobotDogRestaurant from '../assets/robot_dog_restaurant.png'
import AIRenaissance from '../assets/ai_renaissance.png'
import ConnectingDots from '../assets/connecting_dots_podcast.jpeg'

import MusicFoundation from '../assets/music_foundation.png'
import Macaco from '../assets/macaco2.png'
import CapoeiraBanner from '../assets/bannerCapoeira.png'

import InstaGrid from '../assets/insta_grid.png'
import Banner1 from '../assets/banner1.png'
import Banner2 from '../assets/banner2.png'

import '../styles/Welcome.scss'
import Tile from './Tile'
import Chip from './Chip'

export default class Welcome extends Component {
    render() {
        return (
            <div className="Welcome">
                
                <div className="Welcome-greeting-container">

                    <div className="Welcome-greeting-container-greeting">

                        <h2><b>Digital Product Development Engineer | Berlin, Germany</b></h2>

                        <br />

                        <h2 className='Welcome-greeting-container-greeting-highlighted'>
                            I help startups and scale-ups create engaging digital products,
                            build effective software & product teams, and grow their business
                            sustainably.
                        </h2>
                        
                        <h3>
                            ... and I teach some kickass Capoeira classes.
                        </h3>

                        <div className='Welcome-greeting-Chips'>
                            <Chip title='Product Discovery' backgroundColor='#f4f1f8'/>
                            <Chip title='Generative AI' backgroundColor='#f4f1f8'/>
                            <Chip title='Startup Strategy' backgroundColor='#f4f1f8'/>
                            <Chip title='Capoeira' backgroundColor='#f4f1f8'/>
                        </div>

                    </div>
                </div>
                
                <div className='Welcome-section'>
                    
                    <div className='Welcome-section-header'>
                        <h2 className='Welcome-section-title'>Software & Product Development</h2>
                        <div className='Welcome-section-read-more'>
                            <h2>Read more</h2>
                            <img src={Arrow} alt="Arrow icon" />
                        </div>
                    </div>

                    <div className='Welcome-divider'></div>
                    
                    <div className='Welcome-section-tiles'>
                        <Tile
                            backgroundColor='#f4f1f8'
                            title='Transforming Words into Images with Midjourney'
                            description="In this guide, we'll focus on improving your prompt crafting skills for Midjourney, an AI tool which generates images from textual descriptions. The key to getting the best results lies in how you phrase your prompts. We'll go through some advanced techniques to help you craft clearer, more effective prompts - and we will look at some creative results on our way."
                            image={RobotDogRestaurant}
                            icon='Post'
                            hashtags={['LinkedIn', 'GenerativeAI', 'Tutorial']}
                        />
                        <Tile
                            backgroundColor='#fffff0'
                            title='Effective leadership in dev teams: 4 tips for new managers'
                            description="This article is meant for aspiring and practicing engineering managers at various levels of experience. Even if you’re not a manager, but instead leading the way as a tech lead or senior software engineer, this list of thoughts and tools might be helpful for you to grow as a leader from within. My hypothesis for this essay is: leaders in software development are cultural trendsetters — those who build a culture of clear communication, strong collaboration and trusting relationships."
                            icon='Post'
                            hashtags={['Medium', 'Leadership', 'Software']}
                        />
                        <Tile
                            backgroundColor='#f2f8fc'
                            title='The Connecting Dots Podcast - #44: Sami Hamed'
                            description="Conquering the space of numbers - is the first part of a series I’m putting together about the evolution of machine interfaces and their design throughout time. It is based on notes collected during a research I did before starting to work in software development, studying social anthropology at Goethe University in Frankfurt (a. M.), Germany."
                            image={ConnectingDots}
                            icon='Podcast'
                            hashtags={['Podcast', 'Startups', 'Product']}
                        />
                        <Tile
                            backgroundColor='#fffff0'
                            title='The AI Renaissance: How to stand out when everyone can build digital products'
                            description="The rise of generative AI and custom GPTs is revolutionising digital product development, similar to how Apple's App Store's allowed software-literate people everywhere to sell apps to the world. The key to success in this new era isn't creativity or the skill to code anymore, but access to unique, proprietary data. This shift prompts questions about data ethics, the evolving role of creativity, and potential new digital divides."
                            image={AIRenaissance}
                            icon='Post'
                            hashtags={['Medium', 'Leadership', 'Software']}
                        />
                    </div>
                </div>
                
                <div className='Welcome-section'>

                    <div className='Welcome-section-header'>
                        <h2 className='Welcome-section-title'>Capoeira Workshops</h2>
                        <div className='Welcome-section-read-more'>
                            <h2>Read more</h2>
                            <img src={Arrow} alt="Arrow icon" />
                        </div>
                    </div>

                    <div className='Welcome-divider'></div>
                    
                    <div className='Welcome-section-tiles'>
                         <Tile
                                backgroundColor='#f4f1f8'
                                title='Applied Music Theory: Berimbau Variations'
                                description="With a foundation in music theory, we learn how to create free-flowing rhythmic variations... that just work"
                                icon='Workshop'
                                image={MusicFoundation}
                                hashtags={['Music', 'Advanced']}
                        />
                        <Tile
                                backgroundColor='#fcfcf7'
                                title='Conscious Movement: Active and Passive Breath Work'
                                description="In this modular workshop, we learn about conscious breath work in the context of flowing movement, balancing work, and endurance through rhythm."
                                icon='Workshop'
                                image={CapoeiraBanner}
                                hashtags={['Fundamentals']}
                        />
                        <Tile
                            backgroundColor='#f2f8fc'
                            title='Storytelling in Capoeira: Musical Empathy'
                            description="In a small group we collectively figure out how to project our voices in a convincing way and conduct storytelling through music."
                            icon='Workshop'
                            hashtags={['Music', 'Fundamentals']}
                        />
                        <Tile
                                backgroundColor='#fffff0'
                                title='Movement Study: Macaco & Soft-Acro Basics'
                                description="Learn this beautiful soft acrobatics movement originating in the afro-brazilian art form of capoeira."
                                icon='Workshop'
                                image={Macaco}
                                hashtags={['Acrobatics']}
                        />
                    </div>
                </div>
                
                <div className='Welcome-section'>

                    <div className='Welcome-section-header'>
                        <h2 className='Welcome-section-title'>Other Topics</h2>
                        <div className='Welcome-section-read-more'>
                            <h2>Read more</h2>
                            <img src={Arrow} alt="Arrow icon" />
                        </div>
                    </div>

                    <div className='Welcome-divider'></div>
                    <div className='Welcome-section-tiles'>
                        <Tile
                                backgroundColor='#fcfcf7'
                                title='Capoeira Frankfurt Promo Video'
                                description="[...]"
                                icon='Music'
                                image={Banner1}
                                hashtags={['capoeira']}
                        />
                        <Tile
                                backgroundColor='#fcfcf7'
                                title='Essay: Virtual spaces, territoriality, and sovereignty in a borderless world'
                                description="A summary of my Master's thesis on the concept of borders in a digital world."
                                icon='Post'
                                hashtags={['anthropology', 'digitisation']}
                        />
                        <Tile
                                backgroundColor='#fcfcf7'
                                title='Instagram'
                                description="[...]"
                                icon='Music'
                                image={InstaGrid}
                                hashtags={['capopoeira']}
                        />
                        <Tile
                                backgroundColor='#fcfcf7'
                                title='Improving key sales KPIs by 600% through algorithmic automation'
                                description="[...]"
                                icon='Post'
                                image={Banner2}
                                hashtags={['product', 'startup']}
                        />
                    </div>
                </div>

            </div>
        )
    }
}