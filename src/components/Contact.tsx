import * as React from 'react';
import * as THEME from 'three';

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <form>
        <input input="text" placeHolder="Name"></input>
        <input input="text" placeHolder="Email"></input>
        <input input="text" placeHolder="Message"></input>
      </form>
      <div>
        <div>Resume</div>
        <div>LinkedIn</div>
        <div>Instagram</div>
        <div>Email</div>
        <div>Github</div>
      </div>
    </div>
  );
};

export default Contact;