import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';

class DashBoardHostingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    // let firstName;
    // let lastName;
    // let destination;
    // let startDate;
    // let endDate;

    const destination = this.props.destinations[this.props.hosting.destination_id];


    const host = this.props.hosts[this.props.hosting.host_id];
    const guest = this.props.guests[this.props.hosting.guest_id];


    if (this.props.hosting.host_id === this.props.currentUser.id) {
      return (
        <div className="my-travel-plans">
          <p> Guest: { guest ? guest.first_name + ' ' + guest.last_name : '...' }</p>
          <p> Arriving: { this.props.hosting.start_date }</p>
          <p> Departing: { this.props.hosting.end_date} </p>
          <hr className="mytravel-items-underline"/>
        </div>
      );
    }  else {
      return (
        <div className="my-travel-plans">
          <p> Host: { host ? host.first_name + ' ' + host.last_name : '...' }</p>
          <p> Where: { destination ? destination.name : '...' } </p>
          <p> Arriving: { this.props.hosting.start_date }</p>
          <p> Departing: { this.props.hosting.end_date} </p>
          <hr className="mytravel-items-underline"/>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    destinations: state.entities.destinations,
    hostings: state.entities.hostings,
    hosts: state.entities.hosts,
    guests: state.entities.guests,
    currentUser: state.session.currentUser
  };
};

export default withRouter(connect(mapStateToProps, null)(DashBoardHostingItem));
