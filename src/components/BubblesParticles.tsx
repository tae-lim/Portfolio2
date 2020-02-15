import * as React from 'react';
import Particles from 'react-particles-js';

class BubblesParticles extends React.Component {

  render() {
    return (
      <div className="particle-canvas">
        <Particles
          params={{
            particles: {
              color: {
                value: "#000000"
              }
            }
          }}
        />
      </div>
    );
  }
};

export default BubblesParticles;