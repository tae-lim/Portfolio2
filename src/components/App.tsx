import * as React from 'react';

import Sidebar from './Sidebar';
import Home from './Home';
import About from './About';

const App: React.FC = () => {
  const [view, setView] = React.useState('home');
  let main;
  if (view === 'home') {
    main = <Home />
  } else if (view === 'about') {
    main = <About />
  }

  return (
    <div className="main-container">
      <Sidebar view={view} setView={setView}/>
      {main}
    </div>
  );
};

export default App;
