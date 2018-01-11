export const RECEIVE_HOST = 'RECEIVE_HOST';
import * as HostApiUtil from '../util/host_api_util';

export const receiveHost = (host) => {
  return {
    type: RECEIVE_HOST,
  
    host
  };
};

export const fetchHost = (hostId) => (dispatch) => {
  HostApiUtil.fetchHost(hostId).then((host) => {
    return dispatch(receiveHost(host));
  });
};
