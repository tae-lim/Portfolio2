import * as React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import TechStack from './TechStack';

import SimpleParticles from './SimpleParticles';

import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';

const Work: React.FC = () => {
  const cookBuk = {
    name: 'Cookbük',
    description: 'Recipe management services with OAuth and voice command navigation',
    img: '',
    url: 'https://bigredzone-cookbook.herokuapp.com/',
    github: 'https://github.com/tae-lim/CookBuk',
    feLanguages: 'HTML, CSS, JavaScript',
    feFLT: 'React, Artyom.JS, Google OAuth',
    beLanguages: 'JavaScript, NoSQL',
    beFLT: 'Node, Express, MongoDB'
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
            <h3 className="vertical-timeline-element-title">Portfolio</h3>
            <h4 className="vertical-timeline-element-subtitle">Personal portfolio</h4>
            <div>
              <span>React</span>
              <span>Typescript</span>
              <span>SASS</span>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2019 - present"
            icon={<WorkIcon />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Virtual Power Systems</h3>
            <h4 className="vertical-timeline-element-subtitle">Milpitas, CA</h4>
            <h4 className="vertical-timeline-element-subtitle">Front End Developer</h4>
            <div>
              <span>React</span>
              <span>Event-Driven Architecture</span>
              <span>styled-components</span>
              <span>Material-UI</span>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2018 - 2019"
            icon={<GroupIcon />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Greenway</h3>
            <h4 className="vertical-timeline-element-subtitle">Budget management software for tracking monthly user expenses, savings, and loans</h4>
            <div>
              <span>React</span>
              <span>Redux</span>
              <span>Node</span>
              <span>Express</span>
              <span>PostgreSQL</span>
            </div>
            <div>
              <span>Website</span>
              <span>Github</span>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2018 - 2019"
            icon={<GroupIcon />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">BackPacker</h3>
            <h4 className="vertical-timeline-element-subtitle">Yosemite hiking guide with mobile and offline capabilities</h4>
            <div>
              <span>React</span>
              <span>Node</span>
              <span>Express</span>
              <span>PostgreSQL</span>
              <span>PWA</span>
            </div>
            <div>
              <span>Website</span>
              <span>Github</span>
            </div>
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


