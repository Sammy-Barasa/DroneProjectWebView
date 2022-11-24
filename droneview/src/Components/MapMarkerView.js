import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

 const MapMarkerView = () => {

    const mapStyles = {        
        height: "100vh",
        width: "100%"};
      
      const defaultCenter = {
        lat: -1.091182, lng: 37.023082

      }

      const locations = [
        {
          name: "Location 1",
          location: { 
            lat: -1.093002,
            lng: 37.023192 
          },
        },
        {
          name: "Location 2",
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
              <Marker key={item.name} position={item.location}/>
              )
            })
         }

       </GoogleMap>
     
  </LoadScript>
  )
}

export default MapMarkerView

