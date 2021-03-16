import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

 
class SimpleMap extends Component {

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          
        });
      }

  
   setState = {
     center: {
       lat: 39.698012
     }
   }
   

  static defaultProps = {
    center: {
      lat: 39.698012,
      lng: -104.8510464
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyAjcZgp1vXh0i-FibRsz_QVPZNs2y617rc" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.lat}
            lng={this.lon}
            text={this.lat}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;