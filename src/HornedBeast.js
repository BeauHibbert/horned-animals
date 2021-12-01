import {Component} from 'react';
import heart from './images/heart.png';

class HornedBeast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    this.setState({timesClicked: this.state.timesClicked + 1});
  }

  render() {
    return(
      <>
        <div class="beast-wrapper">
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
      </>
    );
  }
}

export default HornedBeast;
