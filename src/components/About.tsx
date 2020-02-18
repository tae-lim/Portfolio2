import * as React from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import PolygonMask from './PolygonMask';

const About: React.FC = () => {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const myRef = React.useRef(null);

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        THREE: THREE
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
          <p>My name is Tae and I've always had an enthusiasm for technology growing up in Silicon Valley.</p>
          <p>I built my first desktop in middle school, took Java in high school, and built cryptocurrency mining rigs during undergrad.</p>
          <p>Programming was only a hobby in lieu of other interests, but I began taking it seriously in 2018.</p>
        </div>
        <div className="about-section">
          <p>I take deep personal satisfaction in being stimulated from challenging problems and thrive in open-communication environments where autonomy is a valued and teamwork is a given.</p>
          <p>I am always learning new languages, technologies, and methodologies to improve my engineering and communication skillsets</p>
        </div>
      </div>
    </div>
  );
};

export default About;