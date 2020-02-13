import * as React from 'react';

import SidebarNavigation from './SidebarNavigation';
import '../styles.scss';

// interface Props {
  
// }

const Sidebar: React.FC = props => {
  const { view, setView } = props;
  return (
    <div className="sidebar-container">
      <div className="logo-container">TL</div>
      <SidebarNavigation view={view} setView={setView}/>
      <div className="contact-container">blah</div>
    </div>
  );
};

export default Sidebar;