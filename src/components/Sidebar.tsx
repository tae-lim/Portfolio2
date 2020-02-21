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
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const Sidebar: React.FC = props => {
  return (
    <div className="sidebar-container">
      <div className="logo-container">TL</div>
      <nav className="nav-container ">
        <SidebarIcon Icon={HomeIcon} />
        <SidebarIcon Icon={FaceIcon} />
        <SidebarIcon Icon={WorkIcon} />
        <SidebarIcon Icon={CodeIcon} />
        <SidebarIcon Icon={CallIcon} />
      </nav>
      <div className="sidebar-contact-container">
        <div className="empty-container"></div>
        <nav className="sidebar-contact-wrapper">
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