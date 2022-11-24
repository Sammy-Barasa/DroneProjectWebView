import React, {useEffect, useState} from 'react'
import './App.css';
import MapMarkerView from './Components/MapMarkerView';

import {  ref, onValue} from "firebase/database";
import {db} from './firebase';

function App() {
const [DronesData, setDronesData] = useState([]);
// const [mapRef, setMapRef] = useRef(null);
useEffect(()=>{
    const userId = "ESapNXOsTpTWxmdQYUElOjW3IsD3";
    const dataCaptured = ref(db, `DroneData/${userId}/readings`);
    onValue(dataCaptured, (snapshot) => {
    const data = snapshot.val();
    if(data!== null){
    console.log(data)
    console.log(Object.values(data))
    setDronesData(data);
    }
    });
},[DronesData])
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <section>
        <div>
            {/* {DronesData.map((DroneData, index)=>{
                return <p>{DroneData}</p>
            })} */}
            <p>Here</p>
        </div>
        <div>
          <MapMarkerView/>
        </div>
      </section>
    </div>
  );
}

export default App;
