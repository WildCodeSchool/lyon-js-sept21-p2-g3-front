import React, { createContext, useState } from 'react';
import MyFoodAPI from '../MyFoodAPI';

const AddToPlanningContext = createContext();

export const AddToPlanningContextProvider = ({ children }) => {
  const [listPlanning, setListPlanning] = useState([]);

  const getPlanning = () => {
    MyFoodAPI.get('/planning')
      .then((response) => response.data)
      .then((data) => {
        setListPlanning(data);
        console.log(listPlanning);
      });
  };

  console.log(listPlanning);

  return (
    <AddToPlanningContext.Provider
      value={{ listPlanning, getPlanning, setListPlanning }}
    >
      {children}
    </AddToPlanningContext.Provider>
  );
};

export default AddToPlanningContext;
