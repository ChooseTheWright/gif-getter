import React, {Component} from 'react';

class SearchGifs extends Component {

  render () {
    return (
      <div>
        <div>
          <button onClick={() => {
            console.log(this.props.searchQuery)
            this.props.getSearchResult()}}>Seach</button>
          <input value={this.props.searchQuery} onChange={(e) => {this.props.getSearchQuery(e.target.value);}}></input>
        </div>
        <iframe width="500" height="400" scrolling="no" marginheight="0" marginwidth="0" src={this.props.searchedGif.url}></iframe>
        <div>
          <button>Add to Favorites</button>
          <button>Banish</button>
        </div>
      </div>
    )
  }
}

export default SearchGifs;
