import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Shopkeepers() {
  return (
    <>
      <div className="flex-auto text-xl font-semibold justify-items-center text-center">
        <h1 className="p-2 my-2 border-t-4 border-b-4 border-background bg-background bg-opacity-60">
          Find your ShoopKeepers
        </h1>
        <MapContainer
          className="h-80"
          id="mapid"
          center={[45.764043, 4.835659]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default Shopkeepers;
