import React, {Component} from 'react';
import './history.css';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wasTimelineConatinerInView: [false, false, false, false]
    };

    this.timelineContainers = [
      {
        ref: React.createRef(),
        heading: 'Miami Dade College',
        time: '2014 - 2016',
        content: `I graduated with an Associates majoring in Computer Engineering.
                  During my time at Miami Dade College I was given the opportunity
                  to explore many different technologies like C, C++ and Java. It 
                  is where I learned how to code and more importantly where I 
                  discovered I was interested in software development.`,
        position: 'left'
      },
      {
        ref: React.createRef(),
        heading: 'EnTec',
        time: '2015 - 2016',
        content: `Shortly before graduating I was offered a position as a Teaching 
                  Assistant at Miami Dade College. This role helped develop my communication
                  skills and showed me I had a passion for teaching others about programming.`,
        position: 'right'
      },
      {
        ref: React.createRef(),
        heading: 'CS50x Miami',
        time: '2016 - 2017',
        content: `Through MDC's Idea Center I got the chance to enroll in Harvard's
                  largest MOOC course called CS50. This course was challenging but 
                  was one of the best experiences I had in a classroom setting. It 
                  laid the foundation I needed to take my skills to the next level.`,
        position: 'left'
      },
      {
        ref: React.createRef(),
        heading: 'Insurance Technologies',
        time: '2017 - 2020',
        content: `I started off as a Junior Software Developer with InsTech. They provide software solutions for insurance companies. I learned a lot about software development during my time there and over the years was able to make major contributions to many of their solutions. My last position at InsTech was of Lead Software Developer.`,
        position: 'right'
      },
      {
        ref: React.createRef(),
        heading: 'Orion Advisor Technology',
        time: '2020 - Present',
        content: `I now work as a Software Engineer for Orion Advisor Tech. They provide software solutions in the fintech space. I am currently working on a project that provides financial advisors with the planning tools they need to give their clients the best experience.`,
        position: 'left'
      }
    ];
  }

  timelineContainers = [];

  isElementInView = (elementRef, offset = 0) => {
    if (!elementRef) {
      return false;
    }
    const top = elementRef.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  }

  checkTimelimeContainersInView = () => {
    let wasTimelineConatinerInView = this.state.wasTimelineConatinerInView;

    for (var i = 0; i < this.timelineContainers.length; i++) {
      let timelineContainerRef = this.timelineContainers[i].ref;
      if (this.isElementInView(timelineContainerRef)) {
        wasTimelineConatinerInView[i] = true;
      }
    }

    if (wasTimelineConatinerInView.every(x => x)) {
      window.removeEventListener('scroll', this.checkTimelimeContainersInView);
    }

    this.setState({
      wasTimelineConatinerInView: wasTimelineConatinerInView
    });
  }

  getTimelineContainerClasses = (timelineContainer, i) => { 
    let defaultClasses = 'timeline-container';
    let isLeft = timelineContainer.position === 'left';

    if (isLeft) {
      defaultClasses += ' timeline-left';
    } else {
      defaultClasses += ' timeline-right';
    }

    if (i === (this.timelineContainers.length - 1)) {
      defaultClasses += ' mb-3';
    } else {
      defaultClasses += ' mb-5';
    }
    
    return defaultClasses;
  }

  render() {
    return (
      <div className="container-fluid" id="history">
        <div className="section-height"></div>
        <div className="timeline">
          {this.timelineContainers.map((timelineContainer, i) => {
            return (
              <div className={this.getTimelineContainerClasses(timelineContainer, i)} ref={(el) => timelineContainer.ref = el} key={i}>
                <div className="timeline-content">
                  <h1><b>{timelineContainer.heading}</b></h1>
                  <span className="d-none d-md-inline"><h1><strong>{timelineContainer.time}</strong></h1></span>
                  <span className="d-inline d-md-none"><h2><strong>{timelineContainer.time}</strong></h2></span>
                  <span className="d-none d-md-inline"><h4><strong>{timelineContainer.content}</strong></h4></span>
                  <span className="d-inline d-md-none"><h5><strong>{timelineContainer.content}</strong></h5></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkTimelimeContainersInView);
  }
}

export default History;