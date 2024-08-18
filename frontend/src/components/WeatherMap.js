// // src/components/WeatherMap.js
// import React, { useState } from 'react';
// import Map, { Source, Layer } from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const MAPBOX_TOKEN = pk.eyJ1IjoibWVkaGF2ZWVzdHVkZW50IiwiYSI6ImNseXJzYWxlejAxM3Yyd29obHg0ZzJpbXIifQ.ks8jwafkAyrZjJdH9YFq0g; // Replace with your actual Mapbox token

// const WeatherMap = () => {
//   const [viewState, setViewState] = useState({
//     latitude: 37.7749,
//     longitude: -122.4194,
//     zoom: 8
//   });

//   return (
//     <div style={{ height: '400px', marginBottom: '20px' }}>
//       <Map
//         {...viewState}
//         onMove={evt => setViewState(evt.viewState)},
//         style={{width: '100%', height: '100%'}},
//         mapStyle="mapbox://styles/mapbox/streets-v11",
//         mapboxAccessToken= {pk.eyJ1IjoibWVkaGF2ZWVzdHVkZW50IiwiYSI6ImNseXJzYWxlejAxM3Yyd29obHg0ZzJpbXIifQ.ks8jwafkAyrZjJdH9YFq0g}
//       >
//         {/* Add map layers here later */}
//       </Map>
//     </div>
//   );
// };

// export default WeatherMap;