export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(hosts) {
    Object.keys(hosts).forEach( (key) => {
      let latLng = { lat: hosts[key].lat, lng: hosts[key].lng};
      new google.maps.Marker({
        position: latLng,
        map: this.map,
        title: hosts[key].first_name
      });
    });
  }
}
