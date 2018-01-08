import React from 'react';
import { connect } from 'react-redux';
import HostsIndex from './hosts_index';
import { fetchDestination } from '../../actions/destination_actions';
// import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    hosts: state.entities.hosts
    // destination: state.entities.destinations[ownProps.match.params.destinationId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDestination: (id) => dispatch(fetchDestination(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HostsIndex);
