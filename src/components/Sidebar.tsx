import * as React from 'react';

import SidebarNavigation from './SidebarNavigation';
import '../styles.scss';

// interface Props {
  
// }

const layout = {
  display: 'flex',
  width: '5rem',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRight: '1px solid black'
};

const Sidebar: React.FC = () => {
  return (
    <div style={layout}>
      <div>TL</div>
      <SidebarNavigation />
      <div>blah</div>
    </div>
  );
};

export default Sidebar;