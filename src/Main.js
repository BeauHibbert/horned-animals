import {Component} from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends Component {
  render() {
    return(
      <>
        <HornedBeast title="Beast1" imageUrl="../public/logo192.png" description="Beast1 description"></HornedBeast>
        <HornedBeast title="Beast2" imageUrl="../public/logo512.png" description="Beast2 description"></HornedBeast>
      </>
    );
  }
}

export default Main;
