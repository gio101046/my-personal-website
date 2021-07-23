import React, {Component} from 'react';
import './skills.css';
import CSharpIcon from '../../images/technologies/csharp.png';
import PythonIcon from '../../images/technologies/python.png';
import JavascriptIcon from '../../images/technologies/javascript.svg';
import SqlIcon from '../../images/technologies/sql.png';


class Skills extends Component {
  constructor(props) {
    super(props);

    /* Create static content information */
    this.technologies = [
      {
        ref: React.createRef(),
        image: CSharpIcon,
        name: "C#"
      },
      {
        ref: React.createRef(),
        image: JavascriptIcon,
        name: "Javascript"
      },
      {
        ref: React.createRef(),
        image: PythonIcon,
        name: "Python"
      },
      {
        ref: React.createRef(),
        image: SqlIcon,
        name: "SQL"
      }
    ];
  }

  /* Class field to store static content */
  progressBars = [];

  render() {
    return (
      <div className="container" id="skills">
        <div className="section-height"></div>
        <div className="row">
          <div className="col">
            <div className="text-center border-top border-bottom ml-2 mr-2 pb-5 pt-5">
              <div className="pb-lg-2 pb-5"><h1>Technologies I Use</h1></div>
              {this.technologies.map((technology, i) => {
                return (
                  <div className="pt-2 pb-2 pt-lg-5 pb-lg-3 pl-4 pr-4 d-inline-block" key={i}>
                    <img src={technology.image} alt={technology.name} width="200" className="img-thumbnail"/>
                    <div className="pt-3"><h4>{technology.name}</h4></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* When component is initially mounted add scroll event listener */
  componentDidMount() {
  }
}

export default Skills;