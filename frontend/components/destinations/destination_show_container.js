import { connect } from 'react-redux';
import DestinationShow from './destination_show';
import { fetchDestination } from '../../actions/destination_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return ({
    destination: state.entities.destinations[ownProps.match.params.destinationId],
    // lat: state.entities.destinations.lat, // this is no longer necessary because I am getting destination as an object
    // long: state.entities.destinations.long
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDestination: (id) => dispatch(fetchDestination(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DestinationShow);
