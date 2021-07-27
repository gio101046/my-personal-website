import React, {Component} from 'react';
import 'styles/Technologies.css';
import CSharpIcon from 'images/csharp.png';
import PythonIcon from 'images/python.png';
import JavaScriptIcon from 'images/javascript.svg';
import SqlIcon from 'images/sql.png';

class Technologies extends Component {
  constructor(props) {
    super(props);

    this.technologies = [
      {
        image: CSharpIcon,
        name: "C#"
      },
      {
        image: JavaScriptIcon,
        name: "Javascript"
      },
      {
        image: PythonIcon,
        name: "Python"
      },
      {
        image: SqlIcon,
        name: "SQL"
      }
    ];
  }

  render() {
    return (
      <div className="container" id="technologies">
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
}

export default Technologies;