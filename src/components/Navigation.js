import React, {Component} from 'react';
import 'styles/Navigation.css';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.navigationOptions = [
      {
        content: 'Intro',
        href: '#intro'
      },
      {
        content: 'Bio',
        href: '#bio'
      },
      {
        content: 'History',
        href: '#history'
      },
      {
        content: 'Tech',
        href: '#technologies'
      },
      {
        content: 'Contact',
        href: '#contact'
      }
    ];
  }

  navigationOptions = [];

  render() {
    return (
      <div>
        <div className="container-fluid desktop-nav fixed-top">
          <div className="row justify-content-center justify-content-xl-end nav-background-color">
            {this.navigationOptions.map((navigationOption, i) => {
              return ( 
                <a className="col-2 col-xl-1 nav-menu-item remove-link-styling" href={navigationOption.href} key={i}>
                  <div className="text-center pt-2 pb-2">
                    <h3>{navigationOption.content}</h3>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="pos-f-t mobile-nav fixed-top nav-background-color">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="m-3">
              {this.navigationOptions.map((navigationOption, i) => {
                return ( 
                  <div className="p-2" data-toggle="collapse" data-target="#navbarToggleExternalContent" key={i}>
                    <a className="remove-link-styling" href={navigationOption.href} >
                      <h4>{navigationOption.content}</h4>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <nav className="navbar nav-background-color">
            <button className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarToggleExternalContent" 
                    aria-controls="navbarToggleExternalContent" 
                    aria-expanded="true" 
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon custom-toggler"></span>
            </button>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavigationBar;