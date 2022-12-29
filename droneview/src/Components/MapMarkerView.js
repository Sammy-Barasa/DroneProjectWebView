import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';

 const MapMarkerView = () => {

    const mapStyles = {        
        height: "100vh",
        width: "100%"};
      
      const defaultCenter = {
        lat: -1.091182, lng: 37.023082

      }

      const locations = [
        {
          name: "Drone 1",
          location: { 
            lat: -1.093002,
            lng: 37.023192 
          },
          x: -12,
          y: 14,
          z: 16,
          h: 12,
        },
        {
          name: "Drone 2",
          location: { 
            lat: -1.093302,
            lng: 37.023400
          },
        }]


  return (
    <LoadScript
     googleMapsApiKey={process.env.REACT_APP_GOOGLEMAP_API_KEY }>
     <GoogleMap
       mapContainerStyle={mapStyles}
       zoom={13}
       center={defaultCenter}
       >
        {
            locations.map(item => {
              return (
              <Marker key={item.name}  icon={{

                url: 'https://www.svgrepo.com/show/52587/drone.svg',
        
                // anchor: Point(17, 46),
        
                // scaledSize: Size(37, 37)
        
            }}>
              <InfoWindow
          // marker={this.state.activeMarker}
          // marker={true}
          // visible={this.state.showingInfoWindow}
          position={item.location}
          visible = "true"
          // onClose={this.onClose}
        >
          <div>
            <h4>{item.x}</h4>
            <p>{item.y}</p>
            <p>{item.z}</p>
            <p>{`Height above ground: ${item.h}`}</p>
          </div>
        </InfoWindow>
            </Marker>
              )
            })
         }

       </GoogleMap>
     
  </LoadScript>
  )
}

export default MapMarkerView

