import React from 'react';
import { connect } from 'react-redux';
import HostShow from './host_show';
import { fetchHost } from '../../actions/host_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    host: state.entities.hosts[ownProps.match.params.hostId],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchHost: (hostId) => dispatch(fetchHost(hostId))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HostShow));
