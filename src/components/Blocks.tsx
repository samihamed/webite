import React, { Component } from 'react'
import Button from './Button'

import '../styles/App.scss'
import '../styles/Header.scss'
import '../styles/Blocks.scss'

import mediumLogo from '../assets/medium.png'
import coffeePortrait from '../assets/coffee.jpeg'
import capoeiraSongBot from '../assets/capoeiraSongBot.png'
import github from '../assets/github.png'
import atabaque from '../assets/atabaque.jpeg'
import bateria from '../assets/bateria.jpeg'
import bateria2 from '../assets/bateria2.jpeg'
import roda from '../assets/roda.jpeg'
import roda2 from '../assets/roda2.jpeg'
import friends from '../assets/friends.jpeg'
import workshop from '../assets/workshop.jpeg'
import music from '../assets/music.jpeg'
import flip from '../assets/flip.jpeg'
import sami from '../assets/flowers.jpg'
import shoot from '../assets/shoot.jpeg'
import balance from '../assets/balance.jpeg'
import soundcloud from '../assets/soundcloud.png'
import youtube from '../assets/youtube.png'
import linkedin from '../assets/linkedin.png'
import { Link } from "react-router-dom"

const Blocks = () => {
    const weeks = [
        [
            { color: 'rgb(34, 83, 30)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'white'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'white'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'green'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'white'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'green'},
        ],[
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'green'},
            { color: 'rgb(34, 83, 30)'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'white'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'white'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'green'},
            { color: 'green'},
            { color: 'green'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'rgb(116, 199, 110)'},
        ],[
            { color: 'green'},
            { color: 'rgb(34, 83, 30)'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'green'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'white'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'green'},
            { color: 'white'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
        ],[
            { color: 'white'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'white'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'rgb(34, 83, 30)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'white'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'green'},
            { color: 'white'},
            { color: 'green'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'rgb(116, 199, 110)'},
        ],[
            { color: 'green'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'white'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'green'},
            { color: 'white'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'green'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'rgb(34, 83, 30)'},
            { color: 'green'},
            { color: 'rgb(116, 199, 110)'},
            { color: 'white'},
        ],
    ]

    return (
        <div className="Blocks">
            <Link to='/capoeira' className='Block Block-B' style={ { backgroundImage: `url(` + atabaque + `)`  }}>
                <h3 className='Block-Text' style={{ fontWeight: 'bolder', color: '#fff', backgroundColor: '#000', padding: '16px 4px', borderRadius: '4px', textAlign: 'center', fontFamily: 'Bebas Neue', fontSize: '4em' }}>MUSIC</h3>
                <Button inverted>BROWSE CONTENT</Button>
            </Link>
            <Link to='https://samihamed.medium.com/8be918ee58b7' target='_blank' className='Block Block-C'>
                <img src={mediumLogo} alt="The Medium logo" />
                <h3>Truths about leadership in software development I wish I knew before becoming a manager</h3>
                <Button>READ ON <u>MEDIUM</u></Button>
            </Link>
            <Link to='https://www.capoeira.chat/' target='_blank' className='Block Block-D'>
                <img src={capoeiraSongBot} alt="The CapoeiraSongBot logo" />
                <h3 style={{ textAlign: 'center'}}>CAPO SONG BOT</h3>
            </Link>
            <div className='Block Block-E'>
                {/* <h3>title</h3>
                <p>description lorem ipsum...</p> */}
            </div>
            <div className='Block Block-F' style={ { backgroundImage: `url(` + shoot + `)`  }}>
                {/* <h3>title</h3>
                <p>description lorem ipsum...</p> */}
            </div>
            <Link to='https://www.github.com/samihamed' target='_blank' className='Block Block-G'>
                <img src={github} alt="The Github logo" />
                <div className="Tiles" style={{marginTop: '16px'}}>
                    { 
                        weeks.map((week, i) => (
                            <div className="week" key={i}>
                                {
                                    week.map((day, j) => (
                                        <div key={j} style={{backgroundColor: day.color, height: '8px', width: '8px', margin: '2px'}}></div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </Link>
            <Link to='https://open.spotify.com/episode/7ioAbUBHY8HAr1ebA3mpmE?si=d8rUO0oHSWOwqCXigrtgJg&dl_branch=1&nd=1' target='_blank' className='Block Block-H' style={ { backgroundImage: `url(` + coffeePortrait + `)`  }}>
                <h2 className='Block-Text' style={{ fontWeight: 'bolder', color: '#222222', fontFamily: 'Bebas Neue' }}>PODCAST</h2>
                <h2 className='Block-Text-Description' style={{ fontWeight: 'bolder', color: '#fff', fontFamily: 'Bebas Neue', lineHeight: '100%', marginTop: '4em' }}>Lessons learned from being my own product's user</h2>
                {/* <h3>title</h3>
                <p>description lorem ipsum...</p> */}
            </Link>
            <div className='Block Block-I' style={ { backgroundImage: `url(` + balance + `)`  }}>
                {/* <h3>title</h3>
                <p>description lorem ipsum...</p> */}
            </div>
            <Link to='https://soundcloud.com/sami-hamed-pop/aruanda-frankfurt-music-class-october-2018?si=d8ffe394cf484cbda9596b18c43d9a96&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' target='_blank' className='Block Block-J' style={ { backgroundImage: `url(` + roda + `)`  }}>
                <img src={soundcloud} alt="A live music session during a workshop in Frankfurt, Germany" />
                {/* <h3>title</h3>
                <p>description lorem ipsum...</p> */}
            </Link>
            <Link to='https://theconnectingdotspodcast.simplecast.com/episodes/44-sami-hamed-1QX0UNTZ' target='_blank' className='Block Block-K' style={ { backgroundImage: `url(` + sami + `)`, backgroundPosition: 'top'  }}>
                <h2 className='Block-Text' style={{ fontWeight: 'bolder', fontFamily: 'Bebas Neue' }}>PODCAST</h2>
                <h2 className='Block-Text' style={{ fontWeight: 'bolder', color: '#000', backgroundColor: '#fff', padding: '0.5em', borderRadius: '4px', fontFamily: 'Bebas Neue', lineHeight: '100%', marginTop: '3em' }}>Product Engineering in PropTech</h2>
            </Link>
            <Link to='https://samihamed.medium.com/thoughts-on-the-evolution-of-machine-interfaces-part-1-conquering-the-space-of-numbers-18148cfc8366' target='_blank' className='Block Block-L'>
                <img src={mediumLogo} alt="The Medium logo" />
                <h3>Thoughts on the evolution of machine interfaces — Conquering the space of numbers</h3>
                <Button>READ ON <u>MEDIUM</u></Button>
            </Link>
            <div className='Block Block-M'>
            </div>
            <Link to='https://samihamed.medium.com/' target='_blank' className='Block Block-A'>
                <img src={mediumLogo} alt="The Medium logo" />
            </Link>
            <Link to='https://samihamed.medium.com/4-things-i-learned-from-becoming-a-lead-developer-in-my-first-year-as-a-self-taught-professional-24472fd45fd1' target='_blank' className='Block Block-N'>
                <img src={mediumLogo} alt="The Medium logo" />
                <h3>4 things I learned from becoming a Lead Developer in my first year of professional software development</h3>
                <Button>READ ON <u>MEDIUM</u></Button>
            </Link>
            <Link to='/capoeira' className='Block Block-O' style={ { backgroundImage: `url(` + bateria + `)`  }}>
                <h2 style={{ fontWeight: 'bolder', color: '#fff', backgroundColor: '#000', padding: '0.5em', borderRadius: '4px', textAlign: 'center', fontFamily: 'Bebas Neue', fontSize: '4em' }}>CAPOEIRA WORKSHOPS</h2>
                <Button inverted>BROWSE CONTENT</Button>
            </Link>
            <Link to='https://www.linkedin.com/in/samihamed/' target='_blank' className='Block Block-P'>
                <img src={linkedin} alt="The LinkedIn Logo" />
            </Link>
            <Link to='https://youtu.be/4J4g0PYKw6Y' target='_blank' className='Block Block-P' style={ { backgroundImage: `url(` + roda2 + `)`  }}>
                <img src={youtube} alt="Link to a video of Capoeira Aruanda Frankfurt" />
            </Link>
            <Link to='https://youtu.be/Dumyq1dTcIc' target='_blank' className='Block Block-P'>
                <img src={youtube} alt="Link to a video of The Connecting Dots Podcast with Sami Hamed" />
            </Link>
            <Link to='https://soundcloud.com/sami-hamed-pop/abertura-do-evento-2015?si=f1de38c4a17149a9bc7466709ca1cbc5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' target='_blank' className='Block Block-P' style={ { backgroundImage: `url(` + bateria2 + `)`  }}>
                <img src={soundcloud} alt="A live recording from a festival in Hamburg, Germany" />
            </Link>
            <Link to='https://www.youtube.com/watch?v=U_aeeV-9R-c' target='_blank' className='Block Block-P' style={ { backgroundImage: `url(` + music + `)`  }}>
                <img src={youtube} alt="The Youtube logo" />
            </Link>
            <div className='Block Block-P'>
            </div>
            <div className='Block Block-P'>
            </div>
            <div className='Block Block-P'>
            </div>
            <div className='Block Block-P'>
            </div>
            <div className='Block Block-P'>
            </div>
            <div className='Block Block-P'>
            </div>
            <div className='Block Block-P'>
            </div>
            <div className='Block Block-P' style={ { backgroundImage: `url(` + flip + `)`  }}>
            </div>
            <Link to='https://samihamed.medium.com/3-things-we-consider-when-designing-digital-experiences-for-physical-products-c5502588ae4e' target='_blank' className='Block Block-Q'>
                <img src={mediumLogo} alt="The Medium logo" />
                <h3>3 things we consider when designing digital experiences for physical products at homefully</h3>
                <Button>READ ON <u>MEDIUM</u></Button>
            </Link>
            <Link to='https://samihamed.medium.com/building-an-automated-bot-to-sign-up-for-gym-classes-with-node-puppeteer-b812ea4a859b?source=friends_link&sk=f03d875b4ae5504d73d4a30c453e737a' target='_blank' className='Block Block-R'>
                <img src={mediumLogo} alt="The Medium logo" />
                <h3>A beginner's guide to Node & Puppeteer javascript bots</h3>
                <Button>READ ON <u>MEDIUM</u></Button>
            </Link>
            <Link to='https://samihamed.medium.com/the-formation-of-virtual-spaces-territoriality-and-sovereignty-in-a-borderless-world-cfd342a2e7e3' target='_blank' className='Block Block-S'>
                <img src={mediumLogo} alt="The Medium logo" />
                <h3>Essay: Virtual spaces, territoriality, and sovereignty in a borderless world</h3>
                <Button>READ ON <u>MEDIUM</u></Button>
            </Link>
        </div>
    )
}

export default Blocks

// ARTICLE: 3 things we consider when designing digital experiences for physical products at homefully
// ARTICLE: Thoughts on the evolution of machine interfaces — Part 1: Conquering the space of numbers
// ARTICLE: Four things I learned from becoming a Lead Developer in my first year of professional software development
// PODCAST: The Connecting Dots - #44: Sami Hamed - vom Kulturanthropologen zum Software Ingenieur & Vice President bei homefully
// PODCAST: The Humans Inside The Pods - 26 - Sami - We create spaces for people to create Communities.
// APP: CapoeiraSongBot
// APP: StockOverflow
// APP: Ginga Store
// AUDIO: Berimbau (Cover)
// AUDIO: Torpedeiro Encouraçado
// VIDEO: Aruanda Frankfurt Promo
// VIDEO: The Connecting Dots - #44: Sami Hamed - vom Kulturanthropologen zum Software Ingenieur & Vice President bei homefully
// STORY: Establishing a data-mindset at an early stage startup
// STORY: Optimizing internal processes through crowd-enabled automation in customer service by eliminating 96% of manual tasks
// STORY: Improving key sales KPIs by 600% through algorithmig automation
// STORY: Implementing company-wide A/B testing to improve key conversion rates with 70+ developers and 20.000 users per day
// LINK: LinkedIn
// LINK: Instagram Capopoeira
// LINK: Instagram SamediHamedi
// PAGE: CV
// WORKSHOP: Capo 1