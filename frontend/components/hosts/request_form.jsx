import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
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

  handleSubmit(e) {
    debugger
    e.preventDefault();
    if (this.props.guest) {
      const hosting = {
        hosting: {
          host_id: this.props.host.id,
          guest_id: this.props.guest.id,
          start_date: this.state.startDate,
          end_date: this.state.endDate,
          status: 'pending'
        }
      };
   this.props.createHosting(hosting);
    }
    // this.props.fetchHostings({
    //   hosting: {
    //     host_id: this.props.currentUser.id
    //   }
    // });
  }

  render() {
    return (
      <div className="request-box">
        <form className="request-form" onSubmit={this.handleSubmit}>
          <DateRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            focusedInput={this.state.focused}
            onDatesChange={({startDate, endDate}) => { this.setState({ startDate, endDate }); }}
            onFocusChange={( focused ) => { this.setState({ focused }); }}
            />
          <button className="request-button">SEND REQUEST TO HOST</button>
        </form>
      </div>
    );
  }

}

export default RequestForm;
