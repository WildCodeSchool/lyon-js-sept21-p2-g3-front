import axios from 'axios';
// import { Map } from 'leaflet';
import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';

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

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Vous êtes ici !</Popup>
    </Marker>
  );
}

function Shopkeepers() {
  const [dataShopkeepers, setDataShopkeepers] = useState([]);

  const imageProduction = [
    {
      code: '10.71',
      urlImg: 'media/boulangerie.jpeg',
    },
    {
      code: '10.71.1',
      urlImg: 'media/boulangerie.jpeg',
    },
    {
      code: '10.71.11',
      urlImg: 'media/boulangerie.jpeg',
    },
    {
      code: '46.34.12',
      urlImg: 'media/blanc-rouge-vin.jpeg',
    },
    {
      code: '10.72.12',
      urlImg: 'media/viennoiseries.jpeg',
    },
    {
      code: '46.37',
      urlImg: 'media/i101986-cafe-nu.jpeg',
    },
    {
      code: '11.07.19',
      urlImg: 'media/blanc-rouge-vin.jpeg',
    },
    {
      code: '01.47.12',
      urlImg: 'media/oeufs.jpeg',
    },
    {
      code: '47.00.12',
      urlImg: 'media/légumes.jpeg',
    },
    {
      code: '47.00.13',
      urlImg: 'media/viande.jpeg',
    },
    {
      code: '10.82.2',
      urlImg: 'media/chocolat.jpeg',
    },
    {
      code: '01.19.10.11',
      urlImg: 'media/légumes.jpeg',
    },
    {
      code: '46.21.11',
      urlImg: 'media/légumes.jpeg',
    },
    {
      code: '10.71.12',
      urlImg: 'media/viennoiseries.jpeg',
    },
    {
      code: '47.00.11',
      urlImg: 'media/légumes.jpeg',
    },
    {
      code: '01.27.12',
      urlImg: 'media/i101986-cafe-nu.jpeg',
    },
    {
      code: '47',
      urlImg: 'media/viennoiseries.jpeg',
    },
    {
      code: "GP.Produits.d'épicerie",
      urlImg: 'media/epicerie.jpeg',
    },
    {
      code: '',
      urlImg: 'media/légumes.jpeg',
    },
  ];

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
          id="map"
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
                <Popup>
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
                        // imageProduction[0].urlImg
                        // console.log(
                        //   'tab src : ',
                        imageProduction.filter((prod) => {
                          if (
                            item.productions.length !== 0 &&
                            prod.code === item.productions[0].code
                          ) {
                            return prod;
                          }
                          return ' ';
                        })[0].urlImg
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
