import { connect } from 'react-redux';
import HomeIndex from './home_index';
import { fetchDestinations, fetchDestination } from '../../actions/destination_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  destinations: Object.keys(state.entities.destinations).map(id => state.entities.destinations[id])
});

const mapDispatchToProps = dispatch => ({
  fetchDestinations: () => dispatch(fetchDestinations()),
  fetchDestination: (id) => dispatch(fetchDestination(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);
