export const RECEIVE_DESTINATIONS = 'RECEIVE_DESTINATIONS';
export const RECEIVE_DESTINATION = "RECEIVE_DESTINATION";

import * as DestinationApiUtil from '../util/destination_api_util';

export const receiveDestinations = (destinations) => {
  return {
    type: RECEIVE_DESTINATIONS,
    destinations
  };
};

export const receiveDestination = (data) => {
  return {
    type: RECEIVE_DESTINATION,
    destination: data.destination,
    hosts: data.hosts
  };
};

export const fetchDestinations = () => (dispatch) => {
  DestinationApiUtil.fetchDestinations().then((destinations) => {
    return dispatch(receiveDestinations(destinations));
  });
};

export const fetchDestination = (id) => (dispatch) => {
  DestinationApiUtil.fetchDestination(id).then((destination) => {
    return dispatch(receiveDestination(destination));
  });
};
