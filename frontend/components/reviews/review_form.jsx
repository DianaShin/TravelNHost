import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { createReview, editReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

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
      userId: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToHostShow = this.redirectToHostShow.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    const userId = parseInt(this.props.match.params.hostId);
    const review = Object.assign({}, this.state, {userId: userId});
    if (this.props.location.state) {
      this.props.editReview(review, this.props.location.state.id);
    } else {
      this.props.createReview(review);
    }
    this.redirectToHostShow();
  }

  redirectToHostShow() {
    return this.props.history.
    push(`/destinations/${this.props.match.params.destinationId}/hosts/${this.props.match.params.hostId}`);
  }

  render() {
    return (
      <section className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>TItle</label>
          <br />
          <input
            className="review-form-title"
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
          />
          <br />
          <textarea
            rows="5"
            cols="25"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br />
          <input className="review-submit" type="submit" />
          <button className="review-cancel" onClick={this.redirectToHostShow}/>
        </form>
      </section>
    );
  }
}




const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  editReview: review => dispatch(editReview(review))
});

export default withRouter(connect(null, mapDispatchToProps)(ReviewForm));
