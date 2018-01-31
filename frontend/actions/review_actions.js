export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

import * as ReviewApiUtil from '../util/review_api_util';

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const removeReview = ({ id }) => ({
  type: REMOVE_REVIEW,
  reviewId: id
});

export const createReview = review => dispatch => {
  return ReviewApiUtil.createReview(review).then(review => {
    return dispatch(receiveReview(review));
  });
};

export const editReview = (review, reviewId) => dispatch => {
  return ReviewApiUtil.editReview(review, reviewId).then(review => {
    return dispatch(receiveReview(review));
  });
};

export const deleteReview = reviewId => dispatch => {
  return ReviewApiUtil.deleteReview(reviewId).then((reviewId) => {
    return dispatch(removeReview(reviewId));
  });
};

export const fetchReview = (reviewId) => dispatch => {
  return ReviewApiUtil.fetchReview(reviewId).then(review => {
    return dispatch(receiveReview(review));
  });
};

export const fetchReviews = (userId) => dispatch => {
  return ReviewApiUtil.fetchReviews(userId).then(reviews => {
    return dispatch(receiveReviews(reviews));
  });
};
