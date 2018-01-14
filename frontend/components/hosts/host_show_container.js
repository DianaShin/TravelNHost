import React from 'react';
import { connect } from 'react-redux';
import HostShow from './host_show';
import { fetchHost } from '../../actions/host_actions';
import { fetchHostings } from '../../actions/hosting_actions';
import { fetchDestination } from '../../actions/destination_actions';
import { withRouter } from 'react-router-dom';
import { fetchReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let destination = state.entities.destinations[ownProps.match.params.destinationId];
  let reviews = Object.values(state.entities.reviews);
  // debugger
  return {
    host: state.entities.hosts[ownProps.match.params.hostId],
    currentUser: state.session.currentUser,
    destination: destination,
    reviews: reviews
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchHost: (hostId) => dispatch(fetchHost(hostId)),
    fetchHostings: (hostId) => dispatch(fetchHostings(hostId)),
    fetchReviews: (id) => dispatch(fetchReviews(id))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HostShow));
