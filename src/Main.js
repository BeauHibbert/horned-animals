import {Component} from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import {Container, Row, Col} from 'react-bootstrap';

class Main extends Component {
  render() {
    let newBeasts = [];
    data.forEach(function(beast) {
      let newBeast = <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description}></HornedBeast>;
      let newBeastCol = <Col xs={12} md={6} lg={4}>{newBeast}</Col>;
      newBeasts.push(newBeastCol);
    }
    );

    return(
      <Container>
        <Row>
          {newBeasts}
        </Row>
      </Container>
    );
  }
}

export default Main;
