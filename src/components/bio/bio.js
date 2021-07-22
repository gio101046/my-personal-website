import React, {Component} from 'react';
import './bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="container-fluid" id="bio">
        <div className="section-height"></div>
        <div className="row">
          <div className="col"> 
            <div className="mx-auto text-center border-top border-bottom pl-1 pl-lg-5 pr-1 pr-lg-5 pt-5 pb-5 d-flex h-100 content-width">
              <h2 className="content-text-size">
                My name is <strong>Giovani Rodriguez</strong> and I create tools, apps and websites. 
                I am a problem solver, solution maker upper and answer deilverer. I'm always itching to learn something new and striving to deliver my best. I like to read, listen to music and ride my bike.
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;