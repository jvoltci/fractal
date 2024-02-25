import { useState } from 'react';
import Flake from './assets/flake.png';
import './App.css';

function App() {
  return (
    <>
      <div className="header">
        <div className="fractal-header">
          <img src={Flake} alt="Fractal Flake" style={{ height: '6vh' }} />
          <h1>fractal</h1>
        </div>
        <div className="center-box">
          <textarea placeholder="Type something..." />
          <button className="gradient-button">Go</button>
        </div>
      </div>
    </>
  );
}

export default App;
