import * as React from 'react';

const root = {
  display: 'flex',
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: '5rem',
};

const Home: React.FC = () => {
  return (
    <div style={root}>
      <h1>Hi,</h1>
      <h1>I'm Tae Lim</h1>
      <h1>Software Developer</h1>
      <h4>Frontend | Backend | Engineer</h4>
    </div>
  );
}

export default Home;