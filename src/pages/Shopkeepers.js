import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import dataKeepers from '../components/DataKeepers';

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
          zoom={9.5}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[45.85147, 4.87585]}>
            <Popup>
              Les jardins du plateau. <br /> Cailloux sur Fontaines.
            </Popup>
          </Marker>
          <Marker position={[45.747665, 4.739877]}>
            <Popup>
              La ferme lyonnaise. <br /> Craponne.
            </Popup>
          </Marker>
          <Marker position={[45.683095, 4.674997]}>
            <Popup>
              Les fruits en folie. <br /> Messimy.
            </Popup>
          </Marker>
          <Marker position={[45.666072, 4.717867]}>
            <Popup>
              La ferme d'Orliénas. <br /> Orliénas.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <section className=" bg-four container">
        <div className="m-8">
          {dataKeepers.cardData.map((item) => {
            return (
              <div className="mx-0 mb-8 text-center">
                <div className="p-0 overflow-hidden h-100 shadow-lg bg-background bg-opacity-60 rounded-md">
                  <img src={item.img} alt="" className="card-img-top w-full" />
                  <div className="card-body">
                    <h2 className="keeper-title">{item.title}</h2>
                    <p className="keeper-text">{item.description}</p>
                    <p className="keeper-adress">{item.adress}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Shopkeepers;
