import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
     return this.props.history.push(`/destinations/${this.props.destination}`);
  }

  render() {
    return (
      <li onClick={this.handleClick} id={this.props.key} className='parent'>
        <p className="destination-name">{this.props.destination}</p>
        <img className="destination" src={this.props.src} />
      </li>
    );
  }
}

export default withRouter(HomeIndexItem);
