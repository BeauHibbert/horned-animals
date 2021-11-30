import {Component} from 'react';

class HornedBeast extends Component {
  render() {
    console.log('imageUrl in HB: ', this.props.imageUrl);
    return(
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;