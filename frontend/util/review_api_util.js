export const fetchReviews = ( host_id ) => {
  return $.ajax({
    method: 'GET',
    url: `api/reviews?host_id=${host_id}`,
  });
};

export const createReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review: review }
  });
};

export const fetchReview = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/reviews/${id}`
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
