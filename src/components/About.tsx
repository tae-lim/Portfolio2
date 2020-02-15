import * as React from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

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
          <p>My name is Tae Lim and I've always had an enthusiasm for technology growing up in Silicon Valley.</p>
          <p>I built my first desktop in middle school, took Java in high school, and built cryptocurrency mining rigs during undergrad.</p>
          <p>Programming was only a hobby in lieu of other interests, but I began taking it seriously in 2018.</p>
        </div>
        <div className="about-section">
          <p>I love being stimulated and engaged through challenging and interesting problems and take deep personal satisfaction in my work, relationships, and accomplishments</p>
          <p>I always want to learn new languages, technologies, and methodologies so I developed this portfolio with a stack I've never used! Check out details here!</p>
          <p>My future plans for this portfolio is to integrate GraphQL and the Apollo Client!</p>
        </div>
      </div>
    </div>
  );
};

export default About;