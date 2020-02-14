import * as React from 'react';
// import TagCanvas from 'tagcanvas/dist/tagcanvas';

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
    <div>
      <h1>Skills</h1>
      <div>
        <div>
          Info about skills
        </div>
        <div id="myCanvasContainer">
          <canvas width="300" height="300" id="myCanvas">
            <p>Anything in here will be replaced on browsers that support the canvas element</p>
            <ul>
              <li><a href="http://www.google.com" target="_blank">Google</a></li>
              <li><a href="/fish">Fish</a></li>
              <li><a href="/chips">Chips</a></li>
              <li><a href="/salt">Salt</a></li>
              <li><a href="/vinegar">Vinegar</a></li>
            </ul>
          </canvas>
        </div>
      </div>
    </div>
  );
};

export default Skills;