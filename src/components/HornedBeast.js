import {Component} from 'react';
import heart from '../images/heart.png';
import SelectedBeast from './SelectedBeast.js';

class HornedBeast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0,
      showModal: false
    };
  }

  handleClick = () => {
    this.setState({timesClicked: this.state.timesClicked + 1});
    this.setState({showModal: true});
    console.log(this.state);
  }

  openModal = () => {
    this.setState({showModal: true});
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  render() {
    return(
      <>
        <div className="beast-wrapper">
          <h2>{this.props.title}</h2>
          <div id="image-heart-wrapper">
            <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title} onClick={this.handleClick} className="beast-image"/>
            <div id="heart-image-wrapper">
              <img src={heart} alt="Red heart image" id="heart-image"/>
              <p>{this.state.timesClicked}</p>
            </div>
          </div>
          <p>{this.props.description}</p>
        </div>
        <SelectedBeast close={this.closeModal} show={this.state.showModal} title={this.props.title} beastImage={this.props.imageUrl} description={this.props.description}/>
      </>
    );
  }
}

export default HornedBeast;
