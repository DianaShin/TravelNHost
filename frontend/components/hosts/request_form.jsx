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
  }

  componentDidMount() {
    this.props.fetchHost(this.props.match.params.hostId);
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
    // this.props.fetchHostings({
    //   hosting: {
    //     host_id: this.props.currentUser.id
    //   }
    // });
  }

  // I want to render a confirmation message if hostings include a hosting where the guest id and host id are identitical to those of the made request
  // So, if this.props.hostings.guest_id includes currentUser's id, render the confirmation
  // else, render the form


// add to host slice, hosting ids, and check if currentUser's id has a hosting with host
  render() {


    // debugger
    // let hostIds = Object.keys(this.props.hostings).map(id => this.props.hostings[id]);

    if (this.props.host) {
      // debugger
      const confirmation = (
        <div className="request-confirmation">
          <h4>Your request has been sent to { this.props.host.first_name }!</h4>
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
