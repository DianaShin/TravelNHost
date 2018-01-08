import React from 'react';
import DestinationMap from './destination_map_container';
import HostsIndex from '../hosts/hosts_index_container';

class DestinationShow extends React.Component {
  componentDidMount() {
    this.props.fetchDestination(this.props.match.params.destinationId);
    window.scrollTo(0,0);
  }

  render() {
    let lat, long, name, country, hero_url;

    if (this.props.destination) {
      lat = this.props.destination.lat;
      long = this.props.destination.long;
      name = this.props.destination.name;
      country = this.props.destination.country;
      hero_url = this.props.destination.hero_url;
    }
    // debugger
    return (
      <div>
        <h1 className="destination-show-name">{name}</h1>
        <h1 className="destination-show-country">{country}</h1>
        <DestinationMap destination={this.props.destination} lat={lat} long={long}/>
        <img src={hero_url} className="destination-cover-image"/>
        <div className="hosts-index">I'm a div
          <HostsIndex />
        </div>
      </div>

    );
  }
}

export default DestinationShow;
