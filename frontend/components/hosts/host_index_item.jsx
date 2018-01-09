import React from 'react';
import { Link, withRouter } from 'react-router';


class HostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.props.history.push(`/destinations/${this.props.destinationId}/hosts/${this.props.id}`);
  }

  render() {
    return (
      <li className="hosts-info-box">
        <div className="host-details-align">
          <img className="host-profile-pic" src={this.props.imageUrl} onClick={this.handleClick}/>
          <div >
             <p className="host-details">{this.props.firstname} {this.props.lastname}</p>
             <img className="profile-icon" src="https://s3.amazonaws.com/travelnhost/icons/profile-gray1-01.svg"/>
             <p className="host-details age-gender">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.gender}, {this.props.age}</p>
             <p className="accepting-guests">Accepting guests</p>
          </div>

        </div>
      </li>
    );

  }

}

export default withRouter(HostIndexItem);
