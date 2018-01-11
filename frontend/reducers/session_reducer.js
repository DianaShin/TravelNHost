import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_HOSTING } from '../actions/hosting_actions';
const prevState = {
  currentUser: null
};

const sessionReducer = (state = prevState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser};
        // currentUser: action.currentUser,
        case RECEIVE_HOSTING:
          let newState = merge({}, state);
          newState.currentUser.hosting_ids.push(action.hosting.id);
          return newState;
    default:
      return state;
  }
};

export default sessionReducer;
