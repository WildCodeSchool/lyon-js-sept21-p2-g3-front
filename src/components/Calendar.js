import React from 'react';

const Calendar = () => {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  return (
    <div className="grid justify-items-center">
      <ul className="flex flex-row space-x-3 pt-7">
        {days.map((day) => (
          <li className=" border-2 rounded-full h-8 w-8 flex items-center justify-center font-extrabold bg-third bg-opacity-30 border-third text-background box-shadow-day">
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;