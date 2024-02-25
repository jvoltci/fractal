import React from 'react';
import Flake from './assets/flake.png';
import './App.css';

const host = 'https://8cc0-2409-40e3-38-1850-dd88-9182-a5de-6ffe.ngrok-free.app'

function App() {
  const [tap, setTap] = React.useState(0)
  const [color, setColor] = React.useState('white')
  const [prompt, setPrompt] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if(tap > 4 && color === 'white') {
      setColor('pink');
      setTimeout(reset, 10000);
    }
  }, [tap])
  const reset = () => {
    setTap(0); setColor('white');
  }
  const getTTS = async () => {
    if(prompt.length < 5 || prompt.length > 1000) return
    setLoading(true)
    try {
      const rawResponse = await fetch(`${host}/fractal/tts/`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({lang: 'hi', prompt})
      });
  
      if (!rawResponse.ok) {
        throw new Error(`HTTP error! Status: ${rawResponse.status}`);
      }
      const blob = await rawResponse.blob();
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error:', error.message);
    }
    setLoading(false)
  }
  return (
    <>
      <div className="header">
        <div className="fractal-header">
          <img onClick={() => setTap(prev => prev + 1)} src={Flake} alt="Fractal Flake" style={{ height: '6vh' }} />
          <h1 style={{color: `${color}`}} >fractal</h1>
        </div>
        <div className="center-box">
          <textarea onChange={(e) => setPrompt(e.target.value)} placeholder="Type something..." />
          <button onClick={() => (!loading && color === 'pink' && getTTS())} className={`gradient-button ${loading ? 'button-loader': ''}`}>Go</button>
        </div>
      </div>
    </>
  );
}

export default App;
