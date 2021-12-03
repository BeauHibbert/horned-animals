import {Component} from 'react';
import HornedBeast from './HornedBeast.js';
import {Container, Row, Col, Form} from 'react-bootstrap';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beastsToShow: this.props.imageData,
    };
  }

  handleChange = (event) => {
    const selection = parseInt(event.target.value);
    let filteredBeasts;

    if (selection === 1) {
      filteredBeasts = this.props.imageData.filter(beast => beast.horns === 1);
    } else if (selection === 2) {
      filteredBeasts = this.props.imageData.filter(beast => beast.horns === 2);
    } else if (selection === 3) {
      filteredBeasts = this.props.imageData.filter(beast => beast.horns === 3);
    } else {
      filteredBeasts = this.props.imageData.filter(beast => beast.horns === 100);
    }

    this.setState({beastsToShow: filteredBeasts});
  }

  render() {
    let beasts = this.state.beastsToShow.map(beast => {
      let newBeast = <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} key={beast.title}></HornedBeast>;
      return <Col xs={12} md={6} lg={4}>{newBeast}</Col>;
    });

    return(
      <>
        <Form>
          <Form.Label>Select the Number of Horns You Would Like to See</Form.Label>
          <Form.Select aria-label='Horn Selector' onChange={this.handleChange}>
            <option>Select a number of horns</option>
            <option value="1">One-horned beasts</option>
            <option value="2">Two-horned beasts</option>
            <option value="3">Three-horned beasts</option>
            <option value="100">One-hundred-horned beasts</option>
          </Form.Select>
        </Form>
        <Container>
          <Row>
            {beasts}
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
