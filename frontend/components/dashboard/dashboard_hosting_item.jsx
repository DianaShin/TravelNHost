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
    // const host = this.props.hostings[this.props.hosting.host_id];

    const guest = this.props.hosts[this.props.hosting.guest_id];
    // <p> Host: {this.props.hosting.host_id} </p>

    return (
      <div className="my-travel-plans">
        <p> Where: { destination ? destination.name : '...' } </p>
        <p> Guest: { guest ? guest.first_name : '...' }</p>
        <p> Arriving: { this.props.hosting.start_date }</p>
        <p> Departing: { this.props.hosting.end_date} </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    destinations: state.entities.destinations,
    hostings: state.entities.hostings,
    hosts: state.entities.hosts
  };
};

export default withRouter(connect(mapStateToProps, null)(DashBoardHostingItem));
