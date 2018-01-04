export const fetchDestinations = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/destinations',
  });
};

export const fetchDestination = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/destinations/${id}`,
  });
};
