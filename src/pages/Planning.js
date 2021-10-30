/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import RecipeTile from '../components/RecipeTile';

const Planning = () => {
  const [value, onChange] = useState(new Date());
  const [midDay, setMidDay] = useState();
  const [night, setNight] = useState();
  const [selectedDay, setSelectedDay] = useState(false);

  useEffect(() => {
    request('', setMidDay);
    request('', setNight);
  }, [selectedDay]);

  const request = (id, set) => {
    axios
      .get(
        ` https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=f3601de5&app_key=960c7d96572cfedbc3eb6bffbfaf24c9`
      )
      .then((response) => response.data)
      .then((data) => {
        set(data);
      });
  };

  return (
    <>
      <div className="grid justify-items-center">
        <Calendar
          onChange={onChange}
          value={value}
          className="m-auto p-5"
          onClickDay={() => {
            setSelectedDay(!selectedDay);
            return selectedDay ? (
              <RecipeTile
                imgSrc={midDay.recipe.image}
                imgAlt={night.recipe.label}
              />
            ) : (
              ''
            );
          }}
        />
      </div>
    </>
  );
};

export default Planning;
