export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {user: user}
    // user is pointing to user object with keys of username and password
  });
};

export const signup = user => {
  return  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user }
  });
};

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);
