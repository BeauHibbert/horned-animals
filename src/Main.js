import {Component} from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import {Container, Row, Col} from 'react-bootstrap';

class Main extends Component {
  render() {
    let newBeasts = data.map(beast => {
      console.log(beast);
      let newBeast = <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} key={beast.title}></HornedBeast>;
      return <Col xs={12} md={6} lg={4}>{newBeast}</Col>;
    });

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
