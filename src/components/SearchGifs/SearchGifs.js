import React, {Component} from 'react';

class SearchGifs extends Component {

  render () {
    return (
      <div>
        <div>
          <button onClick={() => {this.props.getSearchResult()}}>Seach</button>
          <input value={this.props.searchQuery} onChange={(e) => {this.props.getSearchQuery(e.target.value);}}></input>
        </div>
        <iframe width="500" height="500" scrolling="no" marginheight="0" marginwidth="0" src={this.props.searchedGif.url}></iframe>
        <div>
          <button id="favorite" disabled={this.props.gifAdded} onClick={(e) => {this.props.addGif(e.target.id, true);}}>Add to Favorites</button>
          <button id="banished" disabled={this.props.gifAdded} onClick={(e) => {this.props.addGif(e.target.id, true);}}>Banish</button>
        </div>
      </div>
    )
  }
}

export default SearchGifs;
