import React from 'react';

const Calendar = () => {
  const days = ['M', 'TD', 'W', 'TH', 'F', 'ST', 'SD'];

  return (
    <div className="grid justify-items-center pb-5">
      <ul className="flex flex-row space-x-3 pt-7">
        {days.map((day) => (
          <li className="border-2 rounded-full h-9 w-9 flex items-center justify-center font-extrabold bg-background border-third text-primary box-shadow-day">
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
