import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import googleMapStyles from "./GoogleMapStyles.js";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const mapStyles = {
  width: "100%",
  height: "70vh",
  googleMapStyles
};
 
export class Maps extends React.Component {


    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
      })
      this.onMapLoad();
    }

    state = {
      center: {
        lat: 39.7452,
        lng: -104.9922
      }
    }; 
    
    onMapLoad = map => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
          const pos = { lat, lng };
          this.setState({ currentLocation: pos });
        }
      );
    }

  static defaultLocation = {
      lat: 39.7452,
      lng: -104.9922
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
                <div>
          center value: {this.state.center.lat} , {this.state.center.lng}
        </div>
        <Map
          google={this.props.google}
          // defaultProps={this.defaultProps}
          center={{lat: 39.7452},{ lng: -104.9922}}

          // center={this.state.currentLocation}
          styles={this.props.mapStyle}

        >
        </Map>
      </div>
    );
  }
}

Maps.defaultProps = googleMapStyles;


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAjcZgp1vXh0i-FibRsz_QVPZNs2y617rc'
})(Maps);