import axios from 'axios';

// import { Map } from 'leaflet';
import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Circle,
} from 'react-leaflet';

const redOptions = { color: 'red' };

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  useEffect(() => {
    map.locate();
  }, []);

  return position === null ? null : (
    <Marker position={position}>
      {/* <Popup>Vous êtes ici !</Popup> */}
      <Circle center={position} radius={10000} pathOptions={redOptions} />
    </Marker>
  );
}

const imageProduction = {
  10.71: '/media/boulangerie.jpeg',
  '10.71.1': '/media/boulangerie2.jpeg',
  '10.71.11': '/media/boulangerie3.jpeg',
  '46.34.12': '/media/blanc-rouge-vin.jpeg',
  '10.72.12': '/media/viennoiseries.jpeg',
  46.37: '/media/i101986-cafe-nu.jpeg',
  47: '/media/viande.jpeg',
  '11.07.19': '/media/vin2.jpeg',
  '01.47.12': '/media/oeufs.jpeg',
  '47.00.12': '/media/légumes.jpeg',
  '47.00.13': '/media/viande.jpeg',
  '10.82.2': '/media/chocolat.jpeg',
  '10.19.10.11': '/media/légumes.jpeg',
  '46.21.11': '/media/légumes.jpeg',
  '47.00.11': '/media/légumes.jpeg',
  '01.27.12': '/media/i101986-cafe-nu.jpeg',
  '01.19.10.11': '/media/légumes.jpeg',
  '10.71.12': '/media/viennoiseries.jpeg',
  "GP.Produits.d'épicerie": '/media/viennoiseries.jpeg',
};
function Shopkeepers() {
  const [dataShopkeepers, setDataShopkeepers] = useState([]);

  const getDataShopkeepers = () => {
    axios
      .get(
        'https://back.agencebio.org/api/gouv/operateurs/?activit%C3%A9=Production%2C%20Distribution%2C%20Pr%C3%A9paration&departements=69'
      )
      .then((response) => response.data)
      .then((data) => {
        // console.log('data : ', data);
        // console.log('data.items :', data.items);
        setDataShopkeepers(data.items);
      });
  };
  useEffect(() => {
    getDataShopkeepers();
  }, []);

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

          {dataShopkeepers.map((item) => {
            return (
              <Marker
                position={[
                  item.adressesOperateurs[0].lat,
                  item.adressesOperateurs[0].long,
                ]}
              >
                <Popup className="popupCustom text-primary">
                  {item.raisonSociale}
                  {item.adressesOperateurs[0].lieu}
                  {item.adressesOperateurs[0].ville}
                </Popup>
              </Marker>
            );
          })}
          <LocationMarker />
        </MapContainer>
      </div>
      <section className=" bg-four container">
        <div className="m-8">
          {dataShopkeepers.map((item) => {
            return (
              <div className="mx-0 mb-8 text-center">
                <div className="p-0 overflow-hidden h-100 shadow-lg bg-background bg-opacity-60 rounded-md">
                  <div className="card-body">
                    <img
                      src={
                        imageProduction[
                          item.productions[0] && item.productions[0].code
                        ] || '/media/viennoiseries.jpeg'
                      }
                      alt=""
                    />

                    <h2 className="keeper-title">{item.raisonSociale}</h2>
                    {/* <p className="keeper-text">{item.categories}</p> */}
                    <p className="keeper-adress">
                      {item.adressesOperateurs[0].lieu} <br />
                      {item.adressesOperateurs[0].codePostal} <br />
                      {item.adressesOperateurs[0].ville}
                    </p>
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
