import React, {Component} from 'react';
import './FavoriteGifs.css';

class FavoriteGifs extends Component {
  constructor (props) {
    super (props);
    this.state = {
      favGifs: []
    }
  }

  componentWillReceiveProps(nextProps) {
    let favGifsArr = []
    for (let i=0; i < nextProps.gifs.length; i++) {
      if (nextProps.gifs[i].gifStatus === 'favorite') {
        favGifsArr.push(nextProps.gifs[i]);
      }
    }

    this.setState({favGifs: favGifsArr});
  }
  render () {
    return (
      <div id="favorite-gifs">
        <div>
          <h2>Favorite Gifs</h2>
        </div>
        <div id="fav-gif-container">
          {
            this.state.favGifs.map(val => (
              <div className="favorite-gif">
              <iframe width="400" height="400" scrolling="no" src={val.url}></iframe>
              <button id={val.id} onClick={(e) => {this.props.updateGif(e.target.id, 'favorite')}}>Banish Gif</button>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default FavoriteGifs;
