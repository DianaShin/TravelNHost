import React from 'react';
import { Link, withRouter } from 'react-router';


class HostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.props.history.push(`/destinations/${this.props.destinationId}/hosts/${this.props.key}`);
  }

  render() {
    return (
      <li>
        <p className="host-name">{this.props.firstname} {this.props.lastname}</p>
        <img className="host-profile-pic" src={this.props.imageUrl} />
      </li>
    );

  }

}

export default withRouter(HostIndexItem);