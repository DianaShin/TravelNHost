export const fetchHost = userId => {
  return $.ajax({
    url: `/api/users/${userId}`,
    method: 'GET'
  });
};
