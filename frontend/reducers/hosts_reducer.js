import { RECEIVE_DESTINATION } from '../actions/destination_actions';
import merge from 'lodash/merge';

const hostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DESTINATION:
     return action.hosts;
    default:
      return state;
  }
};

export default hostsReducer;
