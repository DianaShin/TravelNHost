import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

class DestinationMap extends React.Component {
  constructor(props){
    super(props);
  
    // this._handleInfoClick = this._handleInfoClick.bind(this);
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
      this.MarkerManager = new MarkerManager(this.map);
      this.MarkerManager.updateMarkers(newProps.hosts);
      // this.map.addListener('bounds_changed', this.handleMapChange);


    }
  }

  componentDidUpdate() {
      this.MarkerManager.updateMarkers(this.props.hosts);
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
