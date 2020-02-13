import * as React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-intro">
        <h1>Welcome,</h1>
        <h1>I'm glad you're here!</h1>
      </div>
      <div className="about-section-container">
        <div className="about-section">
          <p>I've always had an enthusiasm for technology growing up in Silicon Valley.</p>
          <p>I built my first desktop in middle school, took Java in high school, and built cryptocurrency mining rigs during undergrad.</p>
          <p>Programming was only a hobby in lieu of other interests, but I began taking it seriously in 2018.</p>
        </div>
        <div className="about-section">
          <p>I love being stimulated and engaged through challenging and interesting problems</p>
          <p>I always want to learn new languages, technologies, and methodologies so I developed this portfolio with a stack I've never used!</p>
          <p>My future plans for this portfolio is to integrate GraphQL and the Apollo Client!</p>
        </div>
        <div className="about-section">
          <p>"Learn lots. Don't judge. Laugh for no reason. Be nice. Seek fulfillment."</p>
          <p>Life should be lived to the fullest capacity and part of that stems from one's satisfaction in their work, relationships, and accomplishments.</p>
          <p>Exercise and meditation are a daily habit of mine and it allows me to untap my creative and logical potential.</p>
        </div>
      </div>
      <div className="about-stack">
        <div className="about-stack-info">
          <div>Placeholder</div>
          <h6>Front End</h6>
          <div>Typescript, React Hooks, SASS, Context API</div>
        </div>
        <span className="about-stack-divider"></span>
        <div className="about-stack-info">
          <div>Placeholder</div>
          <h6>Back End</h6>
          <div>Python, Flask, AWS</div>
        </div>
      </div>
    </div>
  );
};

export default About;