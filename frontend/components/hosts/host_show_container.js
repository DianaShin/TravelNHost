import React from 'react';
import { connect } from 'react-redux';
import HostShow from './host_show';
import { fetchHost } from '../../actions/host_actions';
import { fetchHostings } from '../../actions/hosting_actions';
import { fetchDestination } from '../../actions/destination_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // let destination = state.entities.destinations[state.entities.hosts[ownProps.match.params.hostId].destination_id]
  return {
    host: state.entities.hosts[ownProps.match.params.hostId],
    currentUser: state.session.currentUser,
    // destination: destination
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchHost: (hostId) => dispatch(fetchHost(hostId)),
    fetchHostings: (hostId) => dispatch(fetchHostings(hostId)),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HostShow));
