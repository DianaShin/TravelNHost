import { RECEIVE_DESTINATIONS, RECEIVE_DESTINATION } from '../actions/destination_actions';
import merge from 'lodash/merge';

const destinationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DESTINATIONS:
      return action.destinations;
    case RECEIVE_DESTINATION:
      return merge({}, state, { [action.destination.id]: action.destination });
    default:
      return state;
  }
};

export default destinationsReducer;
