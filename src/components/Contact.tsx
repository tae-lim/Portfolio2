import * as React from 'react';
import GLOBE from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const Contact: React.FC = () => {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const myRef = React.useRef(null);

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: myRef.current,
        THREE: THREE
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [vantaEffect]);

  return (
    <div className="contact-container" ref={myRef}>
      <h1>Contact Me</h1>
      <p>I am interested in working at the following cities</p>
      <ul>
        <li>San Fracisco Bay Area</li>
        <li>Greater Los Angeles Area</li>
        <li>Dallas, TX</li>
        <li>Chicago, IL</li>
      </ul>
      <nav className="contact-icon-container">
        <div className={"contact-icon-wrapper sidebar-assignment-icon"}><AssignmentIndIcon /></div>
        <div className={"contact-icon-wrapper sidebar-linkedin-icon"}><LinkedInIcon /></div>
        <div className={"contact-icon-wrapper sidebar-github-icon"}><GitHubIcon /></div>
        <div className={"contact-icon-wrapper sidebar-instagram-icon"}><InstagramIcon /></div>
      </nav>
    </div>
  );
};

export default Contact;