import React, {useEffect, useState} from 'react'
import './App.css';
import MapMarkerView from './Components/MapMarkerView';

import {  ref, onValue} from "firebase/database";
import {db} from './firebase';

function App() {
const [AllDronesData, setAllDronesData] = useState([]);
// const [mapRef, setMapRef] = useRef(null);


  useEffect(() => {
    const userId = "ESapNXOsTpTWxmdQYUElOjW3IsD3"
    const query = ref(db, `DroneData/${userId}/readings`);
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        Object.values(data).map((DronesData) => {
          console.log(DronesData)
          return setAllDronesData((DronesData) => [...AllDronesData, DronesData]);
        });
      }
    });
  }, [AllDronesData]);


  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <section>
        <div>
            {/* {DronesData.map((DroneData, index)=>{
                return <p>{DroneData}</p>
            })} */}
            <p>{AllDronesData}</p>
            <p>Airbone Drones</p>
        </div>
        <div>
          <MapMarkerView dataState ={AllDronesData}/>
        </div>
      </section>
    </div>
  );
}

export default App;
