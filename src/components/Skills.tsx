import * as React from 'react';
import BubblesParticles from './BubblesParticles';

const Skills: React.FC = () => {
  React.useEffect(() => {
    const initTagCanvas = async () => {
      try {
        await TagCanvas.Start('myCanvas');
      } catch(e) {
        document.getElementById('myCanvasContainer').style.display = 'none';
      }
    }
    initTagCanvas();
  });

  return (
    <div className="skills-container">
      <BubblesParticles />
      <div className="skills-wrapper">
        <div className="skills-info-container">
          <h1>Skills</h1>
          <div className="skills-info">
            <p>These are technologies I've worked with to develop applications, implement features, and debug.</p>
            <p>Technologies I previously used but would need a refresher: jQuery, AngularJS, Websockets</p>
            <p>My future plans are to learn Python, GraphQL, and Redis.</p>
          </div>
        </div>

        <div id="myCanvasContainer">
          <canvas width="600" height="500" id="myCanvas">
            <p>Anything in here will be replaced on browsers that support the canvas element</p>
            <ul>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML5</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS3</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">Javascript</a></li>
              <li><a href="https://www.typescriptlang.org/" target="_blank">Typescript</a></li>
              <li><a href="https://reactjs.org/" target="_blank">React</a></li>
              <li><a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">Hooks</a></li>
              <li><a href="https://redux.js.org/" target="_blank">Redux</a></li>
              <li><a href="https://material-ui.com/" target="_blank">Material-UI</a></li>
              <li><a href="https://styled-components.com/" target="_blank">styled components</a></li>
              <li><a href="https://www.python.org/" target="_blank">Python</a></li>
              <li><a href="https://nodejs.org/en/" target="_blank">Node</a></li>
              <li><a href="https://expressjs.com/" target="_blank">ExpressJS</a></li>
              <li><a href="https://www.npmjs.com/" target="_blank">npm</a></li>
              <li><a href="https://palletsprojects.com/p/flask/" target="_blank">Flask</a></li>
              <li><a href="https://aws.amazon.com/ec2/" target="_blank">AWS EC2</a></li>
              <li><a href="https://developers.google.com/web/progressive-web-apps" target="_blank">PWA</a></li>
              <li><a href="https://jestjs.io/" target="_blank">Jest</a></li>
              <li><a href="https://airbnb.io/enzyme/" target="_blank">Enzyme</a></li>
              <li><a href="https://www.mysql.com/" target="_blank">MySQL</a></li>
              <li><a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a></li>
              <li><a href="https://www.mongodb.com/" target="_blank">MongoDB</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events" target="_blank">SSE</a></li>
            </ul>
          </canvas>
        </div>
      </div>
    </div>
  );
};

export default Skills;