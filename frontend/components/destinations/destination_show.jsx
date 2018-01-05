import React from 'react';
import DestinationMap from './destination_map';

class DestinationShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    return (
      <div>
        <h1>{this.props.match.params.destination}</h1>
        <DestinationMap destination={this.props.destination} lat={this.props.lat} long={this.props.long}/>
      </div>

    );
  }
}

export default DestinationShow;
