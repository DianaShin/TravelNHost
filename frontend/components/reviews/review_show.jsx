import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editReview, deleteReview } from '../../actions/review_actions';

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
    // this.props.editReview( , this.props.id)
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.id);
  }

  editOrDeleteReview() {
    // debugger
    if (this.props.currentUser && this.props.currentUser.id === this.props.authorId) {
      return (
        <section className="edit-delete-review">
         <button className="guest-edit-review">  Edit Review
         </button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewShow));
