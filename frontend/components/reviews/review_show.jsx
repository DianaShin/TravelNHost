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
    //
    this.props.deleteReview(this.props.reviews.id);
  }

  editOrDeleteReview() {
    if (this.props.currentUser && this.props.currentUser.id === this.props.reviews.guest_id) {
      return (
        <section className="edit-delete-review">
          <Link
            className='guest-edit-review'
            to={{
              pathname: `/destinations/${this.props.match.params.destinationId}/hosts/${this.props.match.params.hostId}/review`,
              state: {
                body: this.props.body,
                title: this.props.title,
                id: this.props.id
              }
            }}
          >
          Edit Review
        </Link>
        <button
          className="guest-delete-review"
          onClick={this.handleDelete}
        >
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
        <p> {this.props.Location} </p>
        <p> {this.props.title} </p>
        <p> {this.props.body} </p>
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
