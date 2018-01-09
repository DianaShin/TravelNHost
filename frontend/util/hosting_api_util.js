export const fetchHosting = (id) => {
  return $.ajax({
    url: `api/hostings/${id}`,
    method: 'GET'
  });
};

// ???? want hostings for specific host/user
export const fetchHostings = () => {
  return $.ajax({
    url: `api/hostings`,
    method: 'GET'
  });
};

export const createHosting = hosting => {
  return $.ajax({
    url: 'api/hostings',
    data: { hosting }
  });
};

export const updateHosting = hosting => {
  return $.ajax({
    url: `api/hostings/${hosting.id}`,
    data: { hosting }
  });
};
