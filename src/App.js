import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import config from './config.js';

import Navbar from './components/Navbar/Navbar.js';
import SearchGifs from './components/SearchGifs/SearchGifs.js';
import FavoriteGifs from './components/FavoriteGifs/FavoriteGifs.js';
import BanishedGifs from './components/BanishedGifs/BanishedGifs.js';

var baseUrl = config.baseUrl;

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      searchQuery: '',
      searchedGif: {
        url: "http://www.e-try.com/black.htm"
      },
      searchQueryStatus: '',
      gifAdded: true,
      gifs: []
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
    this.setState({gifAdded: false});
  }

  addGif = (gifStatus, added) => {
    let inGif = {
      id: this.state.searchedGif.id,
      url: this.state.searchedGif.url,
      gifStatus: gifStatus
    };

    axios.post(baseUrl, inGif)
      .then((res) => {
        this.setState({gifs: res.data});
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchGifs getSearchResult={this.getSearchResult}
        searchQuery={this.state.searchQuery}
        getSearchQuery={this.getSearchQuery}
        searchedGif={this.state.searchedGif}
        addGif={this.addGif}
        gifAdded={this.state.gifAdded}
        />
        <FavoriteGifs gifs={this.state.gifs}/>
        <BanishedGifs gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default App;
