import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import config from './config.js';

import Navbar from './components/Navbar/Navbar.js';
import SearchGifs from './components/SearchGifs/SearchGifs.js';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      searchedGif: {},
      favoriteGifs: [],
      banishedGifs: []
    }
  }

  getSearchResult = (searchQuery) => {
    var key = config.apiKey;
    axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${searchQuery}&rating=pg`)
      .then((res) => {
        this.setState({searchedGif: res.data});
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Navbar />
        <SearchGifs getSearchResult={this.getSearchResult}
        />
      </div>
    );
  }
}

export default App;
