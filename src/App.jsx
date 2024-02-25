import React from 'react';
import Flake from './assets/flake.png';
import './App.css';

function App() {
  const [tap, setTap] = React.useState(0)
  const [color, setColor] = React.useState('white')
  React.useEffect(() => {
    if(tap > 4 && color === 'white') {
      setColor('magenta');
      setTimeout(reset, 10000);
    }
  }, [tap])
  const reset = () => {
    setTap(0); setColor('white');
  }
  return (
    <>
      <div className="header">
        <div className="fractal-header">
          <img onClick={() => setTap(prev => prev + 1)} src={Flake} alt="Fractal Flake" style={{ height: '6vh' }} />
          <h1 style={{color: `${color}`}} >fractal</h1>
        </div>
        <div className="center-box">
          <textarea placeholder="Type something..." />
          <button disabled={color === 'magenta'} className="gradient-button">Go</button>
        </div>
      </div>
    </>
  );
}

export default App;
