import * as HostingApiUtil from '../util/hosting_api_util';

export const RECEIVE_HOSTING = "RECEIVE_HOSTING";
export const RECEIVE_HOSTINGS = "RECEIVE_HOSTINGS";
export const RECEIVE_HOSTING_ERRORS = "RECEIVE_HOSTING_ERRORS";
export const REMOVE_HOSTING = "REMOVE_HOSTING";

export const receiveHostings = ({ hostings, guests, hosts }) => {
  // hostings here reporesents the informastion coming back from the db
  return {
    type: RECEIVE_HOSTINGS,
    hostings,
    guests,
    hosts
  };
};

export const receiveHosting = (hosting) => {
  // debugger
  return {
    type: RECEIVE_HOSTING,
    hosting
  };
};

export const removeHosting = (hosting) => ({
  type: REMOVE_HOSTING,
  hosting
});

export const receiveHostingErrors = errors => ({
  type: RECEIVE_HOSTING_ERRORS,
});

export const fetchHostings = (id) => dispatch => {
  return HostingApiUtil.fetchHostings(id).then(hostings => {
    return dispatch(receiveHostings(hostings));
  });
};

export const fetchHosting = (id) => dispatch => {
  return HostingApiUtil.fetchHostings(id).then(hosting => {
    return dispatch(receiveHostings(hosting));
  });
};


export const createHosting = (hosting) => dispatch => {
  return HostingApiUtil.createHosting(hosting).then(hosting => {
    return dispatch(receiveHosting(hosting));
  });
};

export const updateHosting = (hosting) => dispatch => {
  return HostingApiUtil.updateHosting(hosting).then(hosting => {
    return dispatch(receiveHosting(hosting));
  });
};

export const deleteHosting = hostingId => dispatch => {
  return HostingApiUtil.deleteHosting(hostingId).then((hosting) => {
    return dispatch(removeHosting(hosting));
  });
};
