import React, {Component} from 'react';

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
      <div id="banishedGifs">
        <div>
          <h2>Banished Gifs</h2>
        </div>
        <div>
          {
            this.state.banishedGifs.map(val => (
              <iframe width="500" height="500" scrolling="no" src={val.url}></iframe>
            ))
          }
        </div>
      </div>
    )
  }
}

export default BanishedGifs;
