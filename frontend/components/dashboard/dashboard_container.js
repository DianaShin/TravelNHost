import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
// import { fetchHost } from '../../actions/host_actions';
import { fetchHostings } from '../../actions/hosting_actions';
import { fetchDestinations } from '../../actions/destination_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser,
    // destinations: state.entities.destinations
    hostings: state.entities.hostings
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchHostings: (hostId) => dispatch(fetchHostings(hostId)),
    // fetchDestinations: () => dispatch(fetchDestinations()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
