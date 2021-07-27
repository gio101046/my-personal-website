import React, {Component} from 'react';
import ProfilePicture from 'images/home/profilePictureTwo.jpg';
import "styles/Introduction.css";

const lineOneText = 'Hi, my name is Giovani.';
const lineTwoText = 'I am a software engineer. ';

class Introduction extends Component {
  constructor(props) {
    super(props);

    let typingInterval = this.startTyping();
    this.state = {
      currentLineOne: '',
      currentLineTwo: '',
      currentCharLineOne: 0,
      currentCharLineTwo: 0,
      isCursorOneVisible: true,
      isCursorTwoVisible: false,
      typingInterval: typingInterval,
      cursorBlinkingInterval: null
    };
  }

  getLineOneText = () => {
    return lineOneText;
  }

  getLineTwoText = () => {
    return lineTwoText;
  }

  startTyping = () => {
    let typingInterval = setInterval(this.type, 55);
    return typingInterval;
  }

  startBlinking = () => {
    let blinkingInterval = setInterval(this.blink, 125);
    return blinkingInterval;
  }

  type = () => {
    let { currentLineOne, 
          currentCharLineOne,
          currentLineTwo,
          currentCharLineTwo,
          typingInterval,
          blinkingInterval,
          isCursorOneVisible,
          isCursorTwoVisible } = this.state;

    if (currentCharLineOne === 0 || currentCharLineOne !== this.getLineOneText().length) {
      isCursorOneVisible = true;
      isCursorTwoVisible = false;
      currentLineOne += this.getLineOneText()[currentCharLineOne];
      currentCharLineOne++;
    } else if (currentCharLineTwo === 0 || currentCharLineTwo !== this.getLineTwoText().length) { 
      isCursorOneVisible = false;
      isCursorTwoVisible = true;
      currentLineTwo += this.getLineTwoText()[currentCharLineTwo];
      currentCharLineTwo++;
    } else {
      clearInterval(typingInterval);
      blinkingInterval = setInterval(this.blink, 500, 2);
    }

    this.setState({ currentLineOne: currentLineOne, 
                    currentCharLineOne: currentCharLineOne,
                    currentLineTwo: currentLineTwo, 
                    currentCharLineTwo: currentCharLineTwo,
                    blinkingInterval: blinkingInterval,
                    isCursorOneVisible: isCursorOneVisible,
                    isCursorTwoVisible: isCursorTwoVisible });
  }

  blink = (cursorNumber) => {
    if (cursorNumber === 1) {
      this.setState({ isCursorOneVisible: !this.state.isCursorOneVisible });
    } else {
      this.setState({ isCursorTwoVisible: !this.state.isCursorTwoVisible });
    }
  }

  getCursorClasses = (cursorNumber) => {
    let isCursorVisible = cursorNumber === 1 ? this.state.isCursorOneVisible : this.state.isCursorTwoVisible;
    return `align-text-top ${isCursorVisible ? 'visible' : 'invisible'}`;
  }

  render() { 
    return (
      <div className="container-fluid pt-5" id="intro">
        <div className="row align-items-center pt-4 pt-lg-5 pb-1 pb-lg-3">
          <div className="col-12 col-lg-6">
            <div className="text-center text-lg-right">
              <img src={ProfilePicture} alt="Giovani's Face" className="profile-image rounded-circle img-fluid img-thumbnail" width="500" />
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-3 mt-lg-1">
            <div className="pl-3"> 
              <h1 className="text-center text-lg-left line-one-type-size">{this.state.currentLineOne}<span className={this.getCursorClasses(1)}>|</span></h1>
              <h2 className="text-center text-lg-left line-two-type-size">{this.state.currentLineTwo}<span className={this.getCursorClasses(2)}>|</span></h2>
            </div>
            <div className="pl-3 pt-4 text-center text-lg-left">
              <div className="d-inline pr-3"> 
                <a href="#bio">
                  <button type="button" className="btn btn-outline-primary btn-lg">Get To Know Me</button>
                </a>
              </div>
              <div className="d-inline">
                <a href="https://www.linkedin.com/in/giovaniluisrodriguez/" target="_blank" rel="noreferrer">
                  <button type="button" className="btn btn-outline-primary btn-lg">Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

export default Introduction;