import React from 'react';

export default class Navigation extends React.Component {
  render() {

    const {links} = this.props;

    return (
      <nav className="main-menu">
        <ul>
          <li>
            <a href="/musicstudio/">
              <i className="fa fa-music fa-2x"></i>
              <span className="nav-text">
                Home
              </span>
            </a>
          </li>

          {links.map((link, index) => {
            if (link.slug !== 'index' && link.slug !== 'privacy-policy') {
              return (
                <li key={index}>
                  <a href={link.slug}>
                    <i className="fa fa-music fa-2x"></i>
                    <span className="nav-text">
                      {link.title.rendered}
                    </span>
                  </a>
                </li>
              )
            }
          })}
        </ul>

        <div className="img-center">
          <img src="https://galacticblue.net/musicstudio/img/logo.png" width="60%" alt="Grey Dragon Studios" className="nav-image" />
        </div>
      </nav>
    );
  }

};
