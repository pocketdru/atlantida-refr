import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

 
class SimpleMap extends Component {

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
      })
      this.onMapLoad();
    }

    state = {
      currentLocation: { lat: 39.7452, lng: -104.9922 }
    }; 
    
    onMapLoad = map => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
          const pos = { lat, lng };
          this.setState({ currentLocation: pos });
        }
      );
    }

  static defaultProps = {
    center: {
      lat: 39.7452,
      lng: -104.9922
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyAjcZgp1vXh0i-FibRsz_QVPZNs2y617rc" }}
          center={this.state.currentLocation}
          defaultProps={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            // lat={this.lat}
            // lng={this.lon}
            // text={this.lat}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;