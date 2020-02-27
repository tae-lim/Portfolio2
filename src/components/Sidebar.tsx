import * as React from 'react';
import { Link } from 'react-router-dom';

import SidebarIcon from './SidebarIcon';
import * as ReactTransitionGroup from 'react-transition-group';

import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import CallIcon from '@material-ui/icons/Call';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Sidebar: React.FC = props => {
  return (
    <div className="sidebar-container">
      <div className="logo-container">TL</div>
      <nav className="nav-container ">
        <SidebarIcon Icon={HomeIcon} />
        <SidebarIcon Icon={FaceIcon} />
        <SidebarIcon Icon={CodeIcon} />
        <SidebarIcon Icon={WorkIcon} />
        <SidebarIcon Icon={CallIcon} />
      </nav>
      <div className="sidebar-contact-container">
        <div className="empty-container"></div>
        <nav className="sidebar-contact-wrapper">
          <a className="contact-icon-container" href="https://www.google.com" target="_blank">
            <AssignmentIndIcon />
          </a>
          <a className="contact-icon-container" href="mailto:taelim92@gmail.com" target="_blank">
            <MailOutlineIcon />
          </a>
          <a className="contact-icon-container" href="https://www.linkedin.com/in/tae-lim/" target="_blank">
            <LinkedInIcon />
          </a>
          <a className="contact-icon-container" href="https://github.com/tae-lim" target="_blank">
            <GitHubIcon />
          </a>
          <a className="contact-icon-container" href="https://www.instagram.com/taestybits/" target="_blank">
            <InstagramIcon />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;