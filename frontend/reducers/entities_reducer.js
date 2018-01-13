import { combineReducers } from 'redux';
import destinationsReducer from './destinations_reducer';
import hostsReducer from './hosts_reducer';
import hostingsReducer from './hostings_reducer';
import guestsReducer from './guests_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  destinations: destinationsReducer,
  hosts: hostsReducer,
  hostings: hostingsReducer,
  guests: guestsReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;
