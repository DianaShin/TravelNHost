import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { Link } from 'react-router-dom';
// import 'react-dates/lib/css/_datepicker.css';

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focused: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelRequest = this.cancelRequest.bind(this);
  }

  componentDidMount() {
    this.props.fetchHost(this.props.match.params.hostId);
    this.props.fetchHostings(this.props.match.params.hostId);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.guest) {
      const hosting = {
          host_id: this.props.host.id,
          guest_id: this.props.guest.id,
          destination_id: this.props.host.destination_id,
          start_date: this.state.startDate.format("DD/MM/YYYY"),
          end_date: this.state.endDate.format("DD/MM/YYYY"),
          status: 'pending'
      };
   this.props.createHosting(hosting);
    }
  }

  cancelRequest(e) {
    e.preventDefault();
    // if (this.props.match.params.hostId === this.props.host.id)
    this.props.deleteHosting(parseInt(Object.keys(this.props.hostings)[0]));
  }

  render() {

    // debugger
    // let hostIds = Object.keys(this.props.hostings).map(id => this.props.hostings[id]);

    if (this.props.host) {
      // debugger
      const confirmation = (
        <div>
          <h4 className="request-confirmation">Your request has been sent to { this.props.host.first_name }!</h4>
          <button className="cancel-request" onClick={this.cancelRequest}> Cancel Request </button>
        </div>
      );
      if (this.props.host.hosting_ids.some(hosting_id => this.props.guest.hosting_ids.includes(hosting_id))) {
        return confirmation;
      } else {

        return (
          <div className="request-box">
            <form className="request-form" onSubmit={this.handleSubmit}>
              <DateRangePicker
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                focusedInput={this.state.focused}
                onDatesChange={({startDate, endDate}) => { this.setState({ startDate, endDate }); }}
                onFocusChange={( focused ) => { this.setState({ focused }); }}
                startDateId="start_date"
                endDateId="end_date"
                />
              <button className="request-button">SEND REQUEST TO HOST</button>
            </form>
          </div>
        );
    }
  } else {
    return null;
  }
  }
}

export default RequestForm;
