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
  }

  render() {
    return (
      <DateRangePicker
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        focusedInput={this.state.focused}
        onDatesChange={({startDate, endDate}) => { this.setState({ startDate, endDate }); }}
        onFocusChange={( focused ) => { this.setState({ focused }); }}
        />
    );
  }

}

export default RequestForm;
