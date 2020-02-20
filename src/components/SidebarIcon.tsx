import * as React from 'react';
import { Link } from 'react-router-dom';
import * as ReactTransitionGroup from 'react-transition-group';

const SidebarIcon: React.FC = props => {
  const { Icon } = props;
  const [isHovered, setHover] = React.useState(false);
  console.log(Icon.displayName);

  console.log('isHovered', isHovered);

  const view = isHovered ? (
    <div>
      Hello
    </div>
  ) : (
    <div>
       <Link to={'/'}>
        <Icon />
      </Link>
    </div>
    // <ReactTransitionGroup.CSSTransition
    //   in={isHovered}
    //   timeout={300}
    //   classNames={{
    //     enter: `sidebar-icon-enter`,
    //     enterActive: `sidebar-icon-enter-active`,
    //     enterDone: `sidebar-icon-enter-done`,
    //   }}
    // >
    //   <Link to={'/'}>
    //     <Icon />
    //   </Link>
    // </ReactTransitionGroup.CSSTransition>
  )
  return (
    <div className='sidebar-icon-container' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {view}
    </div>
  );
};

export default SidebarIcon;