export const fetchReviews = ( host_id ) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${host_id}/reviews`,
  });
};

export const createReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review: review }
  });
};

export const deleteReview = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`
  });
};

export const editReview = (review, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/reviews/${id}`,
    data: { review: review }
  });
};
