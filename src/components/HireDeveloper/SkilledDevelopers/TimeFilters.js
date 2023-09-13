// import React, { useState } from "react";
// import { TimeHolder } from "./DateModal.styles";
// import moment from "moment";

// const TimeFilters = ({ selectDate, onTimeFiltersSelect, selectedTimezone }) => {
//   const getTimeSlots = () => {
//     let slots = [];
//     let current = moment?.utc().startOf("day");
//     for (let i = 0; i < 48; i++) {
//       slots.push(current.format("HH:mm"));
//       current.add(30, "minutes");
//     }
//     return slots;
//   };

//   const timeSlots = getTimeSlots();
//   const time = timeSlots.map((slot) => {
//     return moment.utc(slot, "HH:mm").tz(selectedTimezone).format("hh:mma");
//   });
//   const [selectedTime, setSelectedTime] = useState(null);

//   const handleTimeClick = (index) => {
//     const selectedTimeSlot = time[index];
//     setSelectedTime(selectedTimeSlot);
//     handleTimeFilterSelect([selectedTimeSlot]);
//   };

//   const handleTimeFilterSelect = (selectedTimes) => {
//     onTimeFiltersSelect(selectedTimes);
//   };
//   const formatDate = (date) => {
//     return date.toLocaleDateString(undefined, {
//       month: "short",
//       day: "numeric",
//       weekday: "short",
//     });
//   };
//   return (
//     <TimeHolder>
//       <h1>{selectDate ? formatDate(selectDate) : "Select a date"}</h1>
//       <ul className="time-slots">
//         {time.map((timeSlot, index) => (
//           <li
//             key={index}
//             onClick={() => handleTimeClick(index)}
//             className={`time-slot ${
//               selectedTime === timeSlot ? "selected" : ""
//             }`}
//           >
//             {timeSlot}
//           </li>
//         ))}
//       </ul>
//       {selectedTime && <p>Selected time: {selectedTime}</p>}
//     </TimeHolder>
//   );
// };

// export default TimeFilters;

import React, { useState } from "react";
import { TimeHolder } from "./DateModal.styles";
import moment from "moment";

const TimeFilters = ({ selectDate, onTimeFiltersSelect, selectedTimezone }) => {
  const getTimeSlots = () => {
    let slots = [];
    let current = moment?.utc().startOf("day");
    for (let i = 0; i < 48; i++) {
      slots.push(current.format("HH:mm"));
      current.add(30, "minutes");
    }
    return slots;
  };

  const timeSlots = getTimeSlots();
  const time = timeSlots.map((slot) => {
    return moment.utc(slot, "HH:mm").tz(selectedTimezone).format("hh:mma");
  });

  // Instead of just selectedTime, also manage selectedIndex.
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleTimeClick = (index) => {
    const selectedTimeSlot = time[index];
    setSelectedTime(selectedTimeSlot);
    setSelectedIndex(index); // Set the selected index
    handleTimeFilterSelect([selectedTimeSlot]);
  };

  const handleTimeFilterSelect = (selectedTimes) => {
    onTimeFiltersSelect(selectedTimes);
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
            className={`time-slot ${selectedIndex === index ? "selected" : ""}`}
          >
            {timeSlot}
          </li>
        ))}
      </ul>

      {/* Display the time of the selected index, if there is one */}
      {selectedIndex !== null && <p>Selected time: {time[selectedIndex]}</p>}
    </TimeHolder>
  );
};

export default TimeFilters;
