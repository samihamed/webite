import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Tiles from './components/Tiles';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Tiles/>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
