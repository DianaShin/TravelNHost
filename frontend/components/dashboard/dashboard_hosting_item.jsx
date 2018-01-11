import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';

class DashBoardHostingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let firstName;
    // let lastName;
    // let destination;
    // let startDate;
    // let endDate;
    const destination = this.props.destinations[this.props.hosting.destination_id];

    return (
      <div>
        <p> Where: { destination ? destination.name : '...' } </p>
        <p> Host: {this.props.hosting.host_id} </p>
        <p> Arriving: { this.props.hosting.start_date }</p>
        <p> Departing: { this.props.hosting.end_date} </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    destinations: state.entities.destinations,
    hostings: state.entities.hostings
  };
};

export default withRouter(connect(mapStateToProps, null)(DashBoardHostingItem));
