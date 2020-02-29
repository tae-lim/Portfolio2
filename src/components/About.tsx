import * as React from 'react';
import TaeIcon from '../pics/tae.png';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

const About: React.FC = () => {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const myRef = React.useRef(null);

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: '#01539D',
        midtoneColor: '#86b3d2',
        lowlightColor: '#86a2b9',
        baseColor: '#c0cacf',
        speed: 1.20,
        zoom: 2.60
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [vantaEffect]);

  return (
    <div className="about-container" ref={myRef}>
      <div className="about-intro">
        <h1>Welcome,</h1>
        <h1>I'm glad you're here!</h1>
      </div>
      <div className="about-section-container">
        <div className="about-section">
          <p>My name is Tae and I've always had an enthusiasm for technology growing up in Silicon Valley</p>
          <p>I'm consistently learning new languages, technologies, and methodologies to further improve my engineering and communication capabilities</p>
          <p>Solving challenging problems in open-communication environments where autonomy is valued and teamwork is a given are my forte!</p>
        </div>
        <div className="about-section">
          <img src={TaeIcon} alt="Tae Lim"/>
        </div>
      </div>
    </div>
  );
};

export default About;
