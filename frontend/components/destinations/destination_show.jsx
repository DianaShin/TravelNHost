import React from 'react';
import DestinationMap from './destination_map';

class DestinationShow extends React.Component {
  componentDidMount() {
    this.props.fetchDestination(this.props.match.params.destinationId);
  }

  render() {
    let lat, long, name;

    if (this.props.destination) {
      lat = this.props.destination.lat;
      long = this.props.destination.long;
      name = this.props.destination.name;
    }
    // debugger
    return (
      <div>
        <h1 className="destination-show">{name}</h1>
        <DestinationMap destination={this.props.destination} lat={lat} long={long}/>
      </div>

    );
  }
}

export default DestinationShow;


// <p className="destination-show">{this.props.match.params.destination.name}</p>
