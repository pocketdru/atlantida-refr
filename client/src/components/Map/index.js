import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import googleMapStyles from "./GoogleMapStyles.js";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const mapStyles = {
  width: "100%",
  height: "70vh",
  googleMapStyles
};
 
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
      <div className="map" style={googleMapStyles}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyAjcZgp1vXh0i-FibRsz_QVPZNs2y617rc" }}
          center={this.state.currentLocation}
          defaultProps={this.props.center}
          defaultZoom={this.props.zoom}
          defaultOptions={{
            disableDefaultUI: true, // disable default map UI

            styles: this.props.styles // change default map styles
          }}
        >
          <AnyReactComponent
                      center={this.state.currentLocation}

            text="{this.lat}"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;