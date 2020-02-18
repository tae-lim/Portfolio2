import * as React from 'react';

const TechStack: React.FC = props => {
  const { appInfo } = props;

  const frontEnd = appInfo.feLanguages ? (
    <div className="tech-stack-info">
      <div className="stack-info-header">
        <h4>Front End</h4>
      </div>
      <div className="stack-info-languages">
        <span>Languages</span>
        <p>{appInfo.feLanguages}</p>
      </div >
      <div className="stack-info-FLT">
        <span>Frameworks & Libraries</span>
        <p>{appInfo.feFLT}</p>
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
        <p>{appInfo.beLanguages}</p>
      </div>
      <div className="stack-info-FLT">
        <span>Frameworks & Libraries</span>
        <p>{appInfo.beFLT}</p>
      </div>
    </div>
  ) : '';

  const divider = appInfo.feLanguages && appInfo.beLanguages ? <span className="tech-stack-divider"></span> : '';

  return (
    <div className="app-info-container">
      <div className="app-info-header">
        <h3 className="vertical-timeline-element-title">{appInfo.name}</h3>
        <p>{appInfo.description}</p>
      </div>
      <div className="tech-stack-container">
        <div className="tech-stack-wrapper">
          {frontEnd}
          {divider}
          {backEnd}
        </div>
        <div className="app-info-links">
          <a className="app-info-link" href={appInfo.url} target="_blank">Website</a>
          <a className="app-info-link" href={appInfo.github} target="_blank">Github</a>
        </div>
      </div>
    </div>
  );
};

export default TechStack;