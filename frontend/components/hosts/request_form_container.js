import React from 'react';
import { connect } from 'react-redux';
import { fetchHost } from '../../actions/host_actions';
import { createHosting, fetchHostings, deleteHosting } from '../../actions/hosting_actions';
import RequestForm from './request_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const host = Object.assign(
    { hosting_ids: [] },
    state.entities.hosts[ownProps.match.params.hostId]
  );

  return {
    host: host,
    guest: state.session.currentUser,
    hostings: state.entities.hostings
  };
};

const mapDispatchToProps = dispatch => ({
  fetchHost: (hostId) => dispatch(fetchHost(hostId)),
  createHosting: (hosting) => dispatch(createHosting(hosting)),
  deleteHosting: (hostingId) => dispatch(deleteHosting(hostingId)),
  fetchHostings: (hostId) => dispatch(fetchHostings(hostId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RequestForm));
