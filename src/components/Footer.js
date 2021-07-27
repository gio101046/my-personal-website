import React from 'react';
import 'styles/Footer.css';
import GithubIcon from 'images/github-logo.svg';
import LinkedInIcon from 'images/linkedin-logo.svg';
import TwitterIcon from 'images/twitter-logo.svg';

function Footer() {
  return (
    <div className="container-fluid">
    <div className="section-height"></div>
      <div className="row justify-content-center footer-background-color">
        <div className="col-3 p-3 text-center">
          <a href="https://github.com/gio101046" className="d-block" target="_blank" rel="noopener noreferrer">
            <img alt="Github Icon" src={GithubIcon} width="32" height="32" />
          </a>
        </div>
        <div className="col-3 p-3 text-center">
          <a href="https://www.linkedin.com/in/giovaniluisrodriguez/" className="d-block" target="_blank" rel="noopener noreferrer">
            <img alt="LinkedIn Icon" src={LinkedInIcon} width="32" height="32" />
          </a>
        </div>
        <div className="col-3 p-3 text-center">
          <a href="https://twitter.com/gcode0727" className="d-block" target="_blank" rel="noopener noreferrer">
            <img alt="Twitter Icon" src={TwitterIcon} width="32" height="32" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;