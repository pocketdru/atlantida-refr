import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import googleMapStyles from "./GoogleMapStyles.js";

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
          console.log(pos.lat)
          this.setState({ center: {
            lat: pos.lat,
            lng: pos.lng
          } });
          console.log(this.state)
          console.log(this.state.center.lat)
          console.log(this.state.center.lng)

        }
      );
    }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
                <div>
          center value: {this.state.center.lat} , {this.state.center.lng}
        </div>
        <Map
          google={this.props.google}
          center={{lat: this.state.center.lat, lng: this.state.center.lng}}
          zoom={17}
          styles={this.props.mapStyle}>
              <Marker
                position={{lat: this.state.center.lat, lng: this.state.center.lng}} />
        </Map>
      </div>
    );
  }
}

Maps.defaultProps = googleMapStyles;


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAjcZgp1vXh0i-FibRsz_QVPZNs2y617rc'
})(Maps);