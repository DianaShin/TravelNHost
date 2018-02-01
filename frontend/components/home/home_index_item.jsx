import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      if (this.props.currentUser === null) {
        return this.props.history.push('/login');
      } else {
        return this.props.history.push(`/destinations/${this.props.destination.id}`);
      }
  }

  render() {
    let name;
    if (this.props.destination) {
      name = this.props.destination.name;
    }
    let image_url;
    if (this.props.destination) {
      image_url = this.props.destination.image_url;
    }
    return (
      <li onClick={this.handleClick} id={this.props.key} className='parent'>
        <p className="destination-name">{name}</p>
       <img className="destination" src={image_url} />
      </li>
    );
  }
}

export default withRouter(HomeIndexItem);
