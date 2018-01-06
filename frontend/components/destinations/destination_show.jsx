import React from 'react';
import DestinationMap from './destination_map';

class DestinationShow extends React.Component {
  componentDidMount() {
    this.props.fetchDestination(this.props.match.params.destinationId);
  }

  render() {
    let lat, long, name, country, image_url;

    if (this.props.destination) {
      lat = this.props.destination.lat;
      long = this.props.destination.long;
      name = this.props.destination.name;
      country = this.props.destination.country;
      image_url = this.props.destination.image_url;
    }
    // debugger
    return (
      <div>
        <h1 className="destination-show-name">{name}</h1>
        <h1 className="destination-show-country">{country}</h1>
        <DestinationMap destination={this.props.destination} lat={lat} long={long}/>
        <img src={image_url} className="destination-cover-image"/>
      </div>

    );
  }
}

export default DestinationShow;


// <p className="destination-show">{this.props.match.params.destination.name}</p>
