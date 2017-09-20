import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  render () {
    return (
      <div className="navbar">
        <img src="/../../../favicon.ico" alt="React Icon" onClick={() => {this.props.deleteAllGifs()}}/>
        <div className="nav-links">
          <a href="#search-gifs">Search Gifs</a>
          <a href="#favorite-gifs">Favorite Gifs</a>
          <a href="#banished-gifs">Banished Gifs</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
