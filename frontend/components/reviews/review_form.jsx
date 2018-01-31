import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { createReview, editReview, fetchReview } from '../../actions/review_actions';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    let body = '';
    let title = '';
    if (props.location.state) {
      body = props.location.state.body;
      title = props.location.state.title;
    }
    this.state = {
      body: body,
      title: title,
      host_id: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToHostShow = this.redirectToHostShow.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.reviewId) {
      this.props.fetchReview(this.props.match.params.reviewId).then((response) => {
        this.setState(
        {title: response.review.title, body: response.review.body, id: response.review.id}
      );
    });
    }
  }

    componentWillReceiveProps(newProps) {
      if (!this.state) {
        this.setState(
          {title: newProps.review.title, body: newProps.review.body, id: newProps.match.params.reviewId}
        );
      }
    }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    const host_id = parseInt(this.props.match.params.hostId);
    const review = Object.assign({}, this.state, {host_id: host_id});
    if (this.props.location.state) {
      this.props.editReview(review, this.props.location.state.id);
    } else {
      this.props.createReview(review);
    }
    // this.redirectToHostShow();
    this.setState({
      body: '',
      title: ''
    });
  }

  redirectToHostShow() {
    return this.props.history.
    push(`/destinations/${this.props.match.params.destinationId}/hosts/${this.props.match.params.hostId}`);
  }

  render() {
    return (
      <section>
        <form className="review-form" onSubmit={this.handleSubmit}>
          <label className="leave-review">LEAVE A REVIEW</label>
          <br />
          <label className="review-form-label">Title</label>
          <br />
          <input
            className="review-form-input"
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
           />
          <br />
          <p className="review-form-label">Body</p>
          <textarea className="review-form-input"
            rows="5"
            cols="30"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br />
          <input className="review-submit" type="submit" />
          <button className="review-cancel" onClick={this.redirectToHostShow}>Cancel</button>
        </form>
      </section>
    );
  }
}




const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  editReview: review => dispatch(editReview(review)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId))
});

export default withRouter(connect(null, mapDispatchToProps)(ReviewForm));
