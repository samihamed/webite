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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Header/>
            
        <Welcome/>

        <div className="Tiles">

          <Tile
            title="Lessons learned from being my own product's user"
            description='Hexagon farm-to-table glossier umami. Paleo four loko man bun cred mlkshk.'
            icon={Podcast}
            backgroundColor='#3d405b'
            />

          <Tile
            title='Thoughts on the evolution of machine interfaces — Conquering the space of numbers'
            description='Hella JOMO hell of fixie drinking vinegar dreamcatcher aesthetic. Woke before they sold out ethical fit viral kitsch kickstarter quinoa plaid tousled iceland thundercats.'
            icon={Post}
            backgroundColor='#81b29a'
            />

          <Tile
            title='4 things I learned from becoming a Lead Developer in my first year of professional software development'
            description='Meh gluten-free beard, narwhal glossier small batch bushwick. Pickled kinfolk gorpcore kale chips fashion axe neutral milk hotel gochujang mustache biodiesel.'
            icon={Music}
            backgroundColor='#f2cc8f'
            />

          <Tile
            title='3 things we consider when designing digital experiences for physical products at homefully'
            description='Meh gluten-free beard, narwhal glossier small batch bushwick. Pickled kinfolk gorpcore kale chips fashion axe neutral milk hotel gochujang mustache biodiesel.'
            icon={Post}
            backgroundColor='#e3d5ca'
            />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
