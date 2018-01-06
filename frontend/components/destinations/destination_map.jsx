import React from 'react';

class DestinationMap extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    // const lat = this.props.lat;
    // const long = this.props.long;
    // const mapOptions = {
    //   center: { lat: 41.0442095, lng: 28.9679681 }, // this is Istanbul
    //   // center: { lat: `${lat}`, long: `${long}`},
    //   zoom: 13
    // };
    //
    // // wrap the mapDOMNode in a Google Map
    // this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.map.addListener('bounds_changed', this.handleMapChange);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.destination) {
      const lat = newProps.destination.lat;
      const lng = newProps.destination.long;
      const mapOptions = {
        center: { lat, lng }, // this is Istanbul
        // center: { lat: `${lat}`, long: `${long}`},
        zoom: 11
      };
      // debugger
      // wrap the mapDOMNode in a Google Map
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.map.addListener('bounds_changed', this.handleMapChange);
    }
  }

  render(){
    return (
      <div id='map-container' ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

//


export default DestinationMap;
