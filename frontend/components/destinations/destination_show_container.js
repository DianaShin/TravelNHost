import { connect } from 'react-redux';
import DestinationShow from './destination_show';
import { receiveDestination } from '../../actions/destination_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    destination: state.destinations[ownProps.params.destinationId]
  });
};

const mapDispatchToProps = dispatch => {
  return {
    receiveDestination: (id) => dispatch(receiveDestination(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DestinationShow);
