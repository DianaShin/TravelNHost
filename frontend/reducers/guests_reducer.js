import { RECEIVE_HOSTINGS } from '../actions/hosting_actions';

const guestsReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_HOSTINGS:
      return action.guests || {};
    default:
      return state;
  }
};

export default guestsReducer;
