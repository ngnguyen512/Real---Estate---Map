import './map.scss';
import React, { useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';

function BigMap() {
    const [viewPort, setViewPort] = useState({
        latitude: 37.7749, // Example latitude, adjust as needed
        longitude: -122.4194, // Example longitude, adjust as needed
        zoom: 5,
    });

    // Example marker position (San Francisco)
    const markerPosition = {
        latitude: 37.7749, // Adjust to your marker's latitude
        longitude: -122.4194, // Adjust to your marker's longitude
    };

    return (
        <div style={{ width: '100%', height: '100vh' }}> {/* Adjust height as per your requirement */}
            <ReactMapGl
                {...viewPort}
                mapboxAccessToken='pk.eyJ1Ijoic3ZheXNlciIsImEiOiJjbGgwbzl5NXcwdmMzM2VwdTkya2J6cDVmIn0.VrQewCt9w1K8QPsLzuDZjg'
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/mapbox/streets-v9"
                onViewportChange={nextViewport => setViewPort(nextViewport)}
            >
                <Marker
                    latitude={markerPosition.latitude}
                    longitude={markerPosition.longitude}
                    offsetLeft={-20} // Adjust based on marker's size
                    offsetTop={-10} // Adjust based on marker's size
                >
                    <div style={{ color: "#d00", fontSize: "24px" }}>📍</div>
                </Marker>
            </ReactMapGl>
        </div>
    );
}

export default BigMap;
