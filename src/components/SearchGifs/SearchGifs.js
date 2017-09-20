import React, {Component} from 'react';
import './SearchGifs.css';

class SearchGifs extends Component {

  render () {
    return (
      <div id="search-gifs">
      <h2>Search for some new gifs to make your favorite or banish</h2>
        <div>
          <button onClick={() => {this.props.getSearchResult()}}>Seach</button>
          <input value={this.props.searchQuery} onChange={(e) => {this.props.getSearchQuery(e.target.value);}}></input>
        </div>
        <iframe width="400" height="400" scrolling="no" src={this.props.searchedGif.url}></iframe>
        <div>
          <button id="favorite" disabled={this.props.gifAdded} onClick={(e) => {this.props.addGif(e.target.id, true);}}>Add to Favorites</button>
          <button id="banished" disabled={this.props.gifAdded} onClick={(e) => {this.props.addGif(e.target.id, true);}}>Banish</button>
        </div>
      </div>
    )
  }
}

export default SearchGifs;
