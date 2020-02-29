import * as React from 'react';
import { Link } from 'react-router-dom';

import * as ReactTransitionGroup from 'react-transition-group';

const SidebarIcon: React.FC = props => {
  const { Icon } = props;
  const [isHovered, setHover] = React.useState(false);

  const iconProps = {
    HomeIcon: {
      link: '/',
      text: 'Home'
    },
    FaceIcon: {
      link: '/about',
      text: 'About',
    },
    WorkIcon: {
      link: '/work',
      text: 'Work'
    },
    CodeIcon: {
      link: '/skills',
      text: 'Skills'
    },
    CallIcon: {
      link: '/contact',
      text: 'Contact'
    }
  };

  const mapIconName = (iconName, type) => {
    if (type === 'link') return iconProps[iconName].link;
    return iconProps[iconName].text;
  }

  const text = mapIconName(Icon.displayName, 'text');
  const link = mapIconName(Icon.displayName, 'link');

  const view = isHovered ? (
    <span key={text}>{text}</span>
  ) : (
    <Icon key={link}/>
  );

  return (
    <Link to={link}>
      <div className='sidebar-icon-container' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <ReactTransitionGroup.CSSTransition
          in={isHovered}
          classNames="icon"
          timeout={700}
        >
          {view}
        </ReactTransitionGroup.CSSTransition>
      </div>
    </Link>
  );
};

export default SidebarIcon;