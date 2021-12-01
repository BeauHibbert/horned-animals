import {Component} from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';

class Main extends Component {
  render() {
    let newBeasts = [];
    data.forEach(function(beast) {
      let newBeast = <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description}></HornedBeast>;
      newBeasts.push(newBeast);
    }
    );
    return(
      <>
        {newBeasts}
      </>
    );
  }
}

export default Main;
