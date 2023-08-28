import React, { useState } from "react";
import { TimeHolder } from "./DateModal.styles";

const TimeFilters = ({ selectDate }) => {
  const time = [
    "12:00pm",
    "12:30pm",
    "1:00pm",
    "1:30pm",
    "2:00pm",
    "2:30pm",
    "3:00pm",
    "3:30pm",
    "4:00pm",
    "4:30pm",
    "5:00pm",
    "5:30pm",
    "6:00pm",
    "6:30pm",
    "7:00pm",
    "7:30pm",
    "8:00pm",
    "8:30pm",
    "9:00pm",
    "9:30pm",
    "10:00pm",
    "10:30pm",
    "11:00pm",
    "11:30pm",
    "12:00am",
    "12:30am",
    "1:00am",
    "1:30am",
    "2:30am",
    "3:00am",
    "3:30am",
    "4:00am",
    "4:30am",
    "5:00am",
    "5:30am",
    "6:00am",
    "6:30am",
    "7:00am",
    "7:30am",
    "8:00am",
    "8:30am",
    "9:00am",
    "9:30am",
    "10:00am",
    "10:30am",
    "11:00am",
    "11:30am",
  ];

  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeClick = (index) => {
    setSelectedTime(time[index]);
  };
  const formatDate = (date) => {
    return date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      weekday: "short",
    });
  };
  return (
    <TimeHolder>
      <h1>{selectDate ? formatDate(selectDate) : "Select a date"}</h1>
      <ul className="time-slots">
        {time.map((timeSlot, index) => (
          <li
            key={index}
            onClick={() => handleTimeClick(index)}
            className={`time-slot ${
              selectedTime === timeSlot ? "selected" : ""
            }`}
          >
            {timeSlot}
          </li>
        ))}
      </ul>
      {/* {selectedTime && <p>Selected time: {selectedTime}</p>} */}
    </TimeHolder>
  );
};

export default TimeFilters;
