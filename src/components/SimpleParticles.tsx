import * as React from 'react';
import Particles from 'react-particles-js';

class SimpleParticles extends React.Component {

  render() {
    return (
      <div className="particle-canvas">
        <Particles
          height={window.outerHeight}
          width="100%"
          params={{
            "particles": {
              "number": {
                "value": 50
              },
              "size": {
                "value": 3
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                }
              }
            }
          }} 
        />
      </div>
    );
  }
};

export default SimpleParticles;