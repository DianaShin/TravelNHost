import React from 'react';
import { connect } from 'react-redux';
import HostsIndex from './hosts_index';
import { fetchDestination } from '../../actions/destination_actions';

const mapStateToProps = (state) => {
  return {
    hosts: state.entities.hosts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDestination: (id) => dispatch(fetchDestination(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HostsIndex);
