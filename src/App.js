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
      searchQuery: '',
      searchedGif: {
        url: "https://localhost:3000"
      },
      favoriteGifs: [],
      banishedGifs: []
    }
  }

  getSearchQuery = (queryStr) => {
    this.setState({searchQuery: queryStr});
  }

  getSearchResult = () => {
    let key = config.apiKey;
    axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${this.state.searchQuery}&rating=pg`)
      .then((res) => {
        let searchedGif = {
          id: res.data.data.id,
          url: res.data.data.image_original_url
        }
        this.setState({searchedGif: searchedGif});
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
        searchQuery={this.state.searchQuery}
        getSearchQuery={this.getSearchQuery}
        searchedGif={this.state.searchedGif}
        />
      </div>
    );
  }
}

export default App;
