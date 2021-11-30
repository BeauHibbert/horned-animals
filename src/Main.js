import {Component} from 'react';
import HornedBeast from './HornedBeast.js';
import Goat from './images/goat.jpeg';
import WeirdGoat from './images/weirdGoat.jpeg';

class Main extends Component {
  render() {
    return(
      <>
        <HornedBeast title="Beast1" imageUrl={Goat} description="Beast1 description"></HornedBeast>
        <HornedBeast title="Beast2" imageUrl={WeirdGoat} description="Beast2 description"></HornedBeast>
      </>
    );
  }
}

export default Main;
