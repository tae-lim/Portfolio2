import * as React from 'react';

const TechStack: React.FC = props => {
  const { appInfo } = props;

  const [view, setView] = React.useState(false);

  const frontEnd = appInfo.feLanguages ? (
    <div className="tech-stack-info">
      <div className="stack-info-header">
        <h4>Front End</h4>
      </div>
      <div className="stack-info-languages">
        <span>Languages</span>
        <span className="stack-info-content">{appInfo.feLanguages}</span>
      </div >
      <div className="stack-info-FLT">
        <span>Frameworks & Libraries</span>
        <span className="stack-info-content">{appInfo.feFLT}</span>
      </div>
    </div>
  ) : '';

  const backEnd = appInfo.beLanguages ? (
    <div className="tech-stack-info">
      <div className="stack-info-header">
        <h4>Back End</h4>
      </div>
      <div className="stack-info-languages">
        <span>Languages</span>
        <span className="stack-info-content">{appInfo.beLanguages}</span>
      </div>
      <div className="stack-info-FLT">
        <span>Frameworks & Libraries</span>
        <span className="stack-info-content">{appInfo.beFLT}</span>
      </div>
    </div>
  ) : '';

  const divider = appInfo.feLanguages && appInfo.beLanguages ? <span className="tech-stack-divider"></span> : ''; 

  const currentView = view ? (
    <div 
      onMouseEnter={() => setView(true)} 
      onMouseLeave={() => setView(false)} 
      className="tech-stack-wrapper"
    >
      {frontEnd}
      {divider}
      {backEnd}
    </div>
  ) : (
    <div 
      onMouseEnter={() => setView(true)} 
      onMouseLeave={() => setView(false)} 
      className="tech-stack-wrapper"
    >
      <img src={appInfo.img} alt={appInfo.name} object-fit='contain'/>
    </div>
  );

  const url = appInfo.url ? <a className="app-info-link" href={appInfo.url} target="_blank">Website</a> : '';
  const github = appInfo.github ? <a className="app-info-link" href={appInfo.github} target="_blank">Github</a> : '';

  console.log('view', view + appInfo.name);
  return (
    <div className="app-info-container">
      <div className="app-info-header">
        <h3 className="vertical-timeline-element-title">{appInfo.name}</h3>
        <p>{appInfo.description}</p>
      </div>
      <div className="tech-stack-container">
        {currentView}
        <div className="app-info-links">
          {url}
          {github}
        </div>
      </div>
    </div>
  );
};

export default TechStack;