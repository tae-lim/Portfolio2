import * as React from 'react';

const SidebarNavigation: React.FC = props => {
  const { view, setView } = props;
  return (
    <nav className="nav-container">
      <div onClick={() => {setView('home')}}>Home</div>
      <div onClick={() => {setView('about')}}>About</div>
      <div onClick={() => {setView('skills')}}>Skills</div>
      <div onClick={() => {setView('work')}}>Work</div>
      <div onClick={() => {setView('contact')}}>Contact</div>
    </nav>
  );
}

export default SidebarNavigation;