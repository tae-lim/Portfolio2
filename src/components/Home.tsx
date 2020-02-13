import * as React from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';
//import * as ReactTransitionGroup from 'react-transition-group';

const duration = 8000;

const Home: React.FC = () => {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const myRef = React.useRef(null);

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: myRef.current,
        THREE: THREE
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [vantaEffect]);

  return (
    <div className="home-container" ref={myRef}>
      <h1 className="animated animatedFadeInUp fadeInUp">Hi, I'm Tae Lim</h1>
      <h2 className="animated animatedFadeInUp fadeInUp">Software Developer</h2>
      <h4 className="animated animatedFadeInUp fadeInUp">Frontend | Backend | Fullstack</h4>
    </div>
  );
}

export default Home;


// const [nameIntro, setNameIntro] = React.useState(false);
// const [swDevIntro, setSwDevIntro] = React.useState(false);
// const [occupationsIntro, setOccupationsIntro] = React.useState(false);

// React.useEffect(() => {
//   setNameIntro(true);
//   setSwDevIntro(true);
//   setOccupationsIntro(true);
// });

/* <ReactTransitionGroup.CSSTransition 
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

</ReactTransitionGroup.CSSTransition> */