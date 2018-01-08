import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { fetchDestinations } from '../../actions/destination_actions';

const mapStateToProps = state => ({
  destinations: Object.keys(state.entities.destinations).map(id => state.entities.destinations[id])
});

const mapDispatchToProps = dispatch => ({
  fetchDestinations: () => dispatch(fetchDestinations())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
