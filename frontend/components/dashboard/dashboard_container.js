import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
// import { fetchHost } from '../../actions/host_actions';
import { fetchHostings } from '../../actions/hosting_actions';
import { fetchDestination } from '../../actions/destination_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // fetchHostings: (hostId) => dispatch(fetchHostings(hostId)),
    // fetchDestination: (id) => dispatch(fetchDestination(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
