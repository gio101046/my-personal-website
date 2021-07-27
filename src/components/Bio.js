import React from 'react';
import 'styles/Bio.css';

function Bio() {
  return (
    <div className="container-fluid" id="bio">
      <div className="section-height"></div>
      <div className="row">
        <div className="col"> 
          <div className="mx-auto text-center border-top border-bottom pl-1 pl-lg-5 pr-1 pr-lg-5 pt-5 pb-5">
            <h1 className="w-100">
              A Little About Myself
            </h1>
            <h2 className="mx-auto content-text-size content-width mt-4">
              My name is <strong>Giovani Rodriguez</strong> and I create tools, apps and websites. 
              I am a problem solver, solution maker upper and answer deilverer. I'm always itching to learn something new and striving to deliver my best. I like to read, listen to music and ride my bike.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;