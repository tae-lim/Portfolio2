import * as React from 'react';
import Particles from 'react-particles-js';

class BubblesParticles extends React.Component {

  render() {
    return (
      <div className="particle-canvas">
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 160,
                "density": {
                  "enable": false
                }
              },
              "size": {
                "value": 4,
                "random": true,
                "anim": {
                  "speed": 6,
                  "size_min": 0.4
                }
              },
              "line_linked": {
                "enable": false
              },
              "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "bubble"
                },
                "onclick": {
                  "enable": true,
                  "mode": "repulse"
                }
              },
              "modes": {
                "bubble": {
                  "distance": 250,
                  "duration": 2,
                  "size": 0,
                  "opacity": 0
                },
                "repulse": {
                  "distance": 400,
                  "duration": 4
                }
              }
            }
          }} 
        />
      </div>
    );
  }
};

export default BubblesParticles;