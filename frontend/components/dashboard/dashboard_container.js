import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchHost } from '../../actions/host_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    currenUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchHost: (hostId) => dispatch(fetchHost(hostId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
