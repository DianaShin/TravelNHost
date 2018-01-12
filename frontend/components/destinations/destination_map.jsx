import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
import { Link, withRouter } from 'react-router';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

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
      // this.MarkerManager = new MarkerManager(this.map);
      this.MarkerManager = new MarkerManager(this.map);
      // this.infowindow = new google.maps.InfoWindow({
      //   content: `<div> Hello </div>`
      // });

      this._registerListeners();

      this.MarkerManager.updateMarkers(newProps.hosts);
    }
  }

  // addInfoWindows(props){
  //   for (let i=0; i < this.props.hosts.length; i++) {
  //     let InfoWindow = new google.maps.InfoWindow();
  //   }
  // }

  componentDidUpdate() {
      this.MarkerManager.updateMarkers(this.props.hosts);
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this._handleClick(coords);
    });
  }

  render(){
    return (
      <div id='map-container' ref={ map => this.mapNode = map }>
      </div>
    );
  }
}



export default withRouter(DestinationMap);
