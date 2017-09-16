import React, {Component} from 'react';

class SearchGifs extends Component {
  constructor (props) {
    super (props);
    this.state = {
      searchedGif: {},
      searchQuery: ''
    }
  }



  getSearchQuery = (queryStr) => {
    this.setState({searchQuery: queryStr});
    console.log(queryStr);
  }

  render () {
    return (
      <div>
        <button onClick={() => {this.props.getSearchResult(this.state.searchQuery)}}>Seach</button>
        <input value={this.state.searchQuery} onChange={(e) => {this.getSearchQuery(e.target.value);}}></input>
      </div>
    )
  }
}

export default SearchGifs;
