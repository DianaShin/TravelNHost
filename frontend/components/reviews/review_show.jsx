import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editReview, deleteReview, fetchReview } from '../../actions/review_actions';

class ReviewShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
        title: this.props.title,
        body: this.props.body,
        id: this.props.id
    };
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.editReview(this.props.id);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.id);
  }


componentDidMount() {
  if (this.props.match.params.reviewId) {
    this.props.fetchReview(this.props.match.params.reviewId);
  }
}

  componentWillReceiveProps(newProps) {
    if (!this.state) {
      this.setState(
        {title: newProps.review.title, body: newProps.review.body, id: newProps.match.params.reviewId}
      );
    }
  }
  // <button className="guest-edit-review" onClick={this.handleEdit}>  Edit Review
  // </button>

  editOrDeleteReview() {
    if (this.props.currentUser && this.props.currentUser.id === this.props.authorId) {
      return (
        <section className="edit-delete-review">
          <Link to={`/destinations/${this.props.destination}/hosts/${this.props.hostId}/reviews/${this.props.id}/edit`} className="guest-edit-review"> Edit Review
          </Link>
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
        <p className="reviewer-name"> By: {this.props.authorName} </p>
        <p className="reviwer-city"> {this.props.authorLocation} </p>
        <p className="review-date"> {this.props.updatedAt.slice(0, 10)}</p>
        <p className="review-title">{this.props.title} </p>
        <p> Review: {this.props.body} </p>
        <div className="edit-delete-buttons"> { this.editOrDeleteReview() }</div>
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
    deleteReview: id => dispatch(deleteReview(id)),
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewShow));
