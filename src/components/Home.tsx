import * as React from 'react';
import * as ReactTransitionGroup from 'react-transition-group';

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 }
};

const Home: React.FC = () => {

  const [intro, setIntro] = React.useState(false);

  React.useEffect(() => {
    setIntro(true);
  });

  return (
    <div className="home-container">
      <ReactTransitionGroup.Transition 
        in={false} 
        timeout={duration}>
        <h1 style={{
          ...defaultStyle,
          ...transitionStyles
        }}>Hi, I'm Tae Lim</h1>
      </ReactTransitionGroup.Transition>
      <h1>Software Developer</h1>
      <h4>Frontend | Backend | Engineer</h4>
    </div>
  );
}

export default Home;