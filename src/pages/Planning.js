import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Planning() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className="grid justify-items-center">
        <Calendar onChange={onChange} value={value} className="m-auto p-5" />
      </div>
    </>
  );
}

export default Planning;
