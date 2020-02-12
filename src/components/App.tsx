import * as React from 'react';

import Sidebar from './Sidebar';
import Home from './Home';

const app = {
  height: '95vh',
  display: 'flex'
}

const App: React.FC = () => {
  const [view, changeView] = React.useState('home');

  // const changeView = React.useCallback(() => {

  // });

  return (
    <div style={app}>
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
