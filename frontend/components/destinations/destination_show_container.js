import { connect } from 'react-redux';
import DestinationShow from './destination_show';
import { receiveDestination } from '../../actions/destination_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    destination: state.entities.destinations[ownProps.match.params.destinationId],
    lat: state.entities.destinations.lat,
    long: state.entities.destinations.long
  });
};

const mapDispatchToProps = dispatch => {
  return {
    receiveDestination: (id) => dispatch(receiveDestination(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DestinationShow);
