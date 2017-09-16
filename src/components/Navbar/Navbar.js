import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  render () {
    return (
      <div className="navbar">
        <img src="/../../../favicon.ico" />
        <div className="nav-links">
          <a href="#favoriteGifs">Favorite Gifs</a>
          <a href="#banishedGifs">Banished Gifs</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
