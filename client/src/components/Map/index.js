import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import googleMapStyles from "./GoogleMapStyles.js";

export class Maps extends React.Component {
  // loading map once the page loaded
    componentDidMount() {
      this.onMapLoad();
    }
    state = {
      center: {
        lat: 39.7452,
        lng: -104.9922
      }
    }; 
    // getting current location and passing to the component
    onMapLoad = map => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
          const pos = { lat, lng };
          this.setState({ center: {
            lat: pos.lat,
            lng: pos.lng
          } });
          console.log(this.state)
        }
      );
    }
  render() {
    return (
      // Important! Always set the container height explicitly
        <Map onLoad = {this.onMapLoad}
          google={this.props.google}
          center={{lat: this.state.center.lat, lng: this.state.center.lng}}
          zoom={17}
          styles={this.props.mapStyle}
          style={{height: "70%"}}>
            {/* position for the marker on the map */}
              <Marker
                position={{lat: this.state.center.lat, lng: this.state.center.lng}} />
        </Map>
    );
  }
}
Maps.defaultProps = googleMapStyles;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAjcZgp1vXh0i-FibRsz_QVPZNs2y617rc'
})(Maps);