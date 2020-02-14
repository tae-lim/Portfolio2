import * as React from 'react';

import Sidebar from './Sidebar';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Skills from './Skills';

const App: React.FC = () => {
  const [view, setView] = React.useState('home');
  let main;

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.goat1000.com/tagcanvas.js';
    script.async = true;
    document.body.appendChild(script);
  });
  
  if (view === 'home') {
    main = <Home />
  } else if (view === 'about') {
    main = <About />
  } else if (view === 'work') {
    main = <Work />
  } else if (view === 'contact') {
    main = <Contact />
  } else if (view === 'skills') {
    main = <Skills />
  }

  return (
    <div className="main-container">
      <Sidebar view={view} setView={setView}/>
      {main}
    </div>
  );
};

export default App;
