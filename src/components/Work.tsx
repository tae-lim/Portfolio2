import * as React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import TechStack from './TechStack';

import SimpleParticles from './SimpleParticles';

import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';

import CookBukIcon from '../pics/cookbuk.png';
import BackPackerIcon from '../pics/backpacker.png';
import GreenwayIcon from '../pics/greenway.png';
import VPSIcon from '../pics/vps.png';
import PortolioIcon from '../pics/portfolio.png';

const Work: React.FC = () => {

  console.log('CookBukIcon', CookBukIcon);
  const cookBuk = {
    name: 'Cookbük',
    description: 'Recipe management services with OAuth and voice command navigation',
    img: CookBukIcon,
    url: 'https://bigredzone-cookbook.herokuapp.com/',
    github: 'https://github.com/tae-lim/CookBuk',
    feLanguages: 'HTML, CSS, JavaScript',
    feFLT: 'React, Artyom.JS, Google OAuth',
    beLanguages: 'JavaScript, NoSQL',
    beFLT: 'Node, Express, MongoDB'
  };

  const backPacker = {
    name: 'BackPacker',
    description: 'Yosemite hiking guide with mobile and offline capabilities',
    img: BackPackerIcon,
    url: 'https://backpackergoonies.herokuapp.com/',
    github: 'https://github.com/tae-lim/BackPacker',
    feLanguages: 'HTML, CSS, JavaScript',
    feFLT: 'React, PWA',
    beLanguages: 'JavaScript, SQL',
    beFLT: 'Node, Express, Travis-CI, Heroku, PostgreSQL'
  };

  const greenway = {
    name: 'Greenway',
    description: 'Budget management software for tracking monthly user expenses, savings, and loans',
    img: GreenwayIcon,
    url: 'https://greenwaypay.herokuapp.com/',
    github: 'https://github.com/tae-lim/Greenway',
    feLanguages: 'HTML, CSS, JavaScript',
    feFLT: 'React, Redux, React Router, Jest',
    beLanguages: 'JavaScript, SQL',
    beFLT: 'Node, Express, Travis-CI, Heroku, PostgreSQL'
  };

  const vps = {
    name: 'Virtual Power Systems',
    description: 'Jr. Front End Developer | Milpitas, CA',
    img: VPSIcon,
    url: 'http://www.virtualpowersystems.com/',
    feLanguages: 'HTML, CSS, JavaScript',
    feFLT: 'React, React Router, Jest, Enzyme, Material-UI, SSE, styled components, Event-Driven Architecture',
  };

  const portfolio = {
    name: 'Portfolio',
    description: 'Personal Portfolio for showcasing work experience',
    img: PortolioIcon,
    url: 'http://www.taelim.dev',
    feLanguages: 'HTML, CSS, SASS, TypeScript',
    feFLT: 'React, React Router',
    beLanguages: 'Python',
    beFLT: 'Flask, AWS/EC2'
  };

  return (
    <div className="work-container">
      <SimpleParticles />
      <div className="work-info-container">
        <h1>Work Experience & Projects</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2020 - present"
            icon={<PersonIcon />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <TechStack appInfo={portfolio} />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2019 - present"
            icon={<WorkIcon />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <TechStack appInfo={vps} />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2018 - 2019"
            icon={<GroupIcon />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <TechStack appInfo={greenway}/>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2018 - 2019"
            icon={<GroupIcon />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <TechStack appInfo={backPacker}/>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2018 - 2019"
            icon={<GroupIcon />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <TechStack appInfo={cookBuk}/>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Work;


