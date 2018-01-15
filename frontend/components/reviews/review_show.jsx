import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editReview, deleteReview } from '../../actions/review_actions';

class ReviewShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.id);
  }

  editOrDeleteReview() {
    if (this.props.currentUser && this.props.currentUser.id === this.props.authorId) {
      return (
        <section className="edit-delete-review">
          <button
            className="guest-delete-review"
            onClick={this.handleDelete}>
            Delete Review
          </button>
        </section>
      );
    }
  }

  render() {
    return (
      <section className="single-review">
        <p> {this.props.authorName} </p>
        <p> {this.props.authorLocation} </p>
        <p> {this.props.title} </p>
        <p> {this.props.body} </p>
        <div> { this.editOrDeleteReview() }</div>
        <hr />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    reviews: state.entities.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editReview: (review, reviewId) => dispatch(editReview(review, reviewId)),
    deleteReview: id => dispatch(deleteReview(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewShow);
