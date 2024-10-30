import React, { useState } from 'react';
import Header from './component/Header';
import About from './component/About';
import Services from './component/Service'; // Ensure correct import path
import Home from './component/Home ';
import Contact from './component/Contact';

function App() {
  const [click, setClick] = useState('home');

  const render = () => {
    switch (click) {
      case 'home':
        return <Home />;

      case 'about':
        return <About />;

      case 'services': // Ensure it matches the key used in Header
        return <Services />;

        case 'contact': 
        return <Contact/>;

      default:
        return <Home />; // Fallback to Home
    }
  };

  return (
    <div>
      <Header setClick={setClick} /> {/* Pass function to Header */}
      {render()} {/* Render the current view */}
    </div>
  );
}

export default App;
