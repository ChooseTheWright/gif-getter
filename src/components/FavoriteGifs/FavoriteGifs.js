import React, {Component} from 'react';

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
      <div id="favoriteGifs">
        <div>
          <h2>Favorite Gifs</h2>
        </div>
        <div>
          {
            this.state.favGifs.map(val => (
              <iframe width="500" height="500" scrolling="no" src={val.url}></iframe>
            ))
          }
        </div>
      </div>
    )
  }
}

export default FavoriteGifs;
