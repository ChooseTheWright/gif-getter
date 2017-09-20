import React, {Component} from 'react';
import './BanishedGifs.css';

class BanishedGifs extends Component {
  constructor (props) {
    super (props);
    this.state = {
      banishedGifs: []
    }
  }

  componentWillReceiveProps(nextProps) {
    let banGifsArr = []
    for (let i=0; i < nextProps.gifs.length; i++) {
      if (nextProps.gifs[i].gifStatus === 'banished') {
        banGifsArr.push(nextProps.gifs[i]);
      }
    }

    this.setState({banishedGifs: banGifsArr});
  }

  render () {
    return (
      <div id="banished-gifs">
        <div>
          <h2>Banished Gifs</h2>
        </div>
        <div id="ban-gif-container">
          {
            this.state.banishedGifs.map(val => (
              <div className="banished-gif">
                <iframe width="400" height="400" scrolling="no" src={val.url}></iframe>
                <button id={val.id} onClick={(e) => {this.props.updateGif(e.target.id, 'banished')}}>Unbanish Gif</button>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default BanishedGifs;
