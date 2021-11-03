import axios from 'axios';
// import { map } from 'leaflet';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Shopkeepers() {
  const [dataShopkeepers, setDataShopkeepers] = useState([]);

  const getDataShopkeepers = () => {
    axios
      .get(
        'https://back.agencebio.org/api/gouv/operateurs/?activit%C3%A9=Production%2C%20Distribution%2C%20Pr%C3%A9paration&departements=69'
      )
      .then((response) => response.data)
      .then((data) => {
        console.log('data : ', data);
        console.log('data.items :', data.items);
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
          scrollWheelZoom
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
                <Popup>
                  {item.raisonSociale}
                  {item.adressesOperateurs[0].lieu}
                  {item.adressesOperateurs[0].ville}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
      <section className=" bg-four container">
        <div className="m-8">
          {dataShopkeepers.map((item) => {
            return (
              <div className="mx-0 mb-8 text-center">
                <div className="p-0 overflow-hidden h-100 shadow-lg bg-background bg-opacity-60 rounded-md">
                  {/* <img src={item.img} alt="" className="card-img-top w-full" /> */}
                  <div className="card-body">
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
