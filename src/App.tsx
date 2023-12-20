import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';

import Welcome from './components/Welcome';
import Header from './components/Header';
import Tile from './components/Tile';

import Cutout from './assets/cutout.png'
import Post from './assets/blog-post.svg'
import Podcast from './assets/podcast.svg'
import Workshop from './assets/workshop.svg'
import Music from './assets/music.svg'

import Bubbles from './assets/3.png'
import Bubbles2 from './assets/4.png'

import AstroChess from './assets/5.png'
import Testimonial from './components/Testimonials';
import Companies from './components/Companies';
import Greeting from './components/Greeting';
import Blocks from './components/Blocks';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Header/> 

        <Greeting />

        <Companies />
        
        <Testimonial isPreview="true" />

        <Blocks />
            
        <Welcome/>

      </div>
    </BrowserRouter>
  );
}

export default App;
