import React, {Component} from 'react';
import 'styles/History.css';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wasTimelineContainerInView: [false, false, false, false]
    };

    this.timelineContainers = [
      {
        ref: React.createRef(),
        heading: 'Miami Dade College',
        year: '2014',
        yearCount: '2',
        description: `I graduated with an Associates majoring in Computer Engineering.
                  During my time at Miami Dade College I was given the opportunity
                  to explore many different technologies like C, C++ and Java. It 
                  is where I learned how to code and more importantly where I 
                  discovered I was interested in software development.`
      },
      {
        ref: React.createRef(),
        heading: 'EnTec',
        year: '2015',
        yearCount: '1',
        description: `Shortly before graduating I was offered a position as a Teaching 
                  Assistant at Miami Dade College. This role helped develop my communication
                  skills and showed me I had a passion for teaching others about programming.`
      },
      {
        ref: React.createRef(),
        heading: 'CS50x Miami',
        year: '2016',
        yearCount: '1',
        description: `Through MDC's Idea Center I got the chance to enroll in Harvard's
                  largest MOOC course called CS50. This course was challenging but 
                  was one of the best experiences I had in a classroom setting. It 
                  laid the foundation I needed to take my skills to the next level.`
      },
      {
        ref: React.createRef(),
        heading: 'Insurance Technologies',
        year: '2017',
        yearCount: '3',
        description: `I started off as a Junior Software Developer with InsTech. They provide 
                      software solutions for insurance companies. I learned a lot about software 
                      development during my time there and over the years was able to make major 
                      contributions to many of their solutions. My last position at InsTech was 
                      of Lead Software Developer.`
      },
      {
        ref: React.createRef(),
        heading: 'Orion Advisor Technology',
        year: '2020',
        yearCount: 'Present',
        description: `I now work as a Software Engineer for Orion Advisor Tech. They provide 
                      software solutions in the fintech space. I am currently working on a
                      project that provides financial advisors with the planning tools they
                      need to give their clients the best experience.`
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
    let wasTimelineContainerInView = this.state.wasTimelineContainerInView;

    for (var i = 0; i < this.timelineContainers.length; i++) {
      let timelineContainerRef = this.timelineContainers[i].ref;
      if (this.isElementInView(timelineContainerRef)) {
        wasTimelineContainerInView[i] = true;
      }
    }

    if (wasTimelineContainerInView.every(x => x)) {
      window.removeEventListener('scroll', this.checkTimelimeContainersInView);
    }

    this.setState({
      wasTimelineContainerInView: wasTimelineContainerInView
    });
  }

  render() {
    return (
      <div className="container pt-5 pb-5" id="history">
        <div className="main-timeline">
        {this.timelineContainers.map((timelineContainer, i) => {
            return (
              <div className="timeline mt-5" ref={(el) => timelineContainer.ref = el} key={i} >
                  <div className="icon"></div>
                  <div className="date-content">
                      <div className="date-outer">
                          <span className="date">
                            <span className="year">{timelineContainer.year}</span>
                            <span className="month">{timelineContainer.yearCount === 'Present' ? timelineContainer.yearCount : timelineContainer.yearCount + ' Years'}</span>
                          </span>
                      </div>
                  </div>
                  <div className="timeline-content">
                      <h2 className="title"><strong>{timelineContainer.heading}</strong></h2>
                      <h2 className="description content-text-size">
                          {timelineContainer.description}
                      </h2>
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