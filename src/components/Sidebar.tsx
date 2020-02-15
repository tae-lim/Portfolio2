import * as React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

// interface Props {
  
// }

const Sidebar: React.FC = props => {
  const { view, setView } = props;
  
  return (
    <div className="sidebar-container">
      <div className="logo-container">TL</div>
      <nav className="nav-container ">
        <div className={"sidebar-icon"} onClick={() => {setView('home')}}><HomeIcon /></div>
        <div className={"sidebar-icon sidebar-about-icon"} onClick={() => {setView('about')}}><FaceIcon /></div>
        <div className={"sidebar-icon sidebar-skills-icon"} onClick={() => {setView('skills')}}><CodeIcon /></div>
        <div className={"sidebar-icon sidebar-work-icon"} onClick={() => {setView('work')}}><WorkIcon /></div>
        <div className={"sidebar-icon sidebar-contact-icon"} onClick={() => {setView('contact')}}><MailOutlineIcon /></div>
      </nav>
      <div className="contact-container">
        <div className="empty-container"></div>
        <nav className="contact-wrapper">
          <div className={"sidebar-icon sidebar-assignment-icon"}><AssignmentIndIcon /></div>
          <div className={"sidebar-icon sidebar-linkedin-icon"}><LinkedInIcon /></div>
          <div className={"sidebar-icon sidebar-github-icon"}><GitHubIcon /></div>
          <div className={"sidebar-icon sidebar-instagram-icon"}><InstagramIcon /></div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;