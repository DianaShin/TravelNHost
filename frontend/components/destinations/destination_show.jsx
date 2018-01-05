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
        <h1 className="destination-show">{this.props.match.params.destination}</h1>
        <p className="destination-show">{this.props.match.params.destination}</p>
        <DestinationMap destination={this.props.destination} lat={this.props.lat} long={this.props.long}/>
      </div>

    );
  }
}

export default DestinationShow;
