import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
     return this.props.history.push(`/destinations/${this.props.destination.id}`);
  }

  render() {
    let name;
    //later add
    // let image_url;
    if (this.props.destination) {
      name = this.props.destination.name;
    }
    return (
      <li onClick={this.handleClick} id={this.props.key} className='parent'>
        <p>{name}</p>
      </li>
    );
  }
}

export default withRouter(HomeIndexItem);

  // <p className="destination-name">{name}</p>
// <img className="destination" src={this.props.src} />
