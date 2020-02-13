import * as React from 'react';
import * as ReactTransitionGroup from 'react-transition-group';

const duration = 8000;

const Home: React.FC = () => {

  const [nameIntro, setNameIntro] = React.useState(false);
  const [swDevIntro, setSwDevIntro] = React.useState(false);
  const [occupationsIntro, setOccupationsIntro] = React.useState(false);

  React.useEffect(() => {
    setNameIntro(true);
    setSwDevIntro(true);
    setOccupationsIntro(true);
  });

  return (
    <div className="home-container">
      {/* <ReactTransitionGroup.CSSTransition 
        in={nameIntro} 
        timeout={duration}
        classNames="alert"
      >

      </ReactTransitionGroup.CSSTransition>
      <ReactTransitionGroup.CSSTransition 
        in={swDevIntro} 
        timeout={12000}
        classNames="alert"
      >

      </ReactTransitionGroup.CSSTransition>
      <ReactTransitionGroup.CSSTransition 
        in={occupationsIntro} 
        timeout={18000}
        classNames="alert"
      >

      </ReactTransitionGroup.CSSTransition> */}
      <h1 className="animated animatedFadeInUp fadeInUp">Hi, I'm Tae Lim</h1>
      <h1 className="animated animatedFadeInUp fadeInUp">Software Developer</h1>
      <h4 className="animated animatedFadeInUp fadeInUp">Frontend | Backend | Engineer</h4>
    </div>
  );
}

export default Home;