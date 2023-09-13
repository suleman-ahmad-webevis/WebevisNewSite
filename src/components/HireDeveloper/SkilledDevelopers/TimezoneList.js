// import React, { useState, useEffect } from "react";
// import moment from "moment-timezone";
// import { TimeZone } from "./DateModal.styles";

// const TimezoneList = () => {
//   const timezones = moment.tz.names();

//   console.log("timezones", timezones);

//   const [selectedTimezone, setSelectedTimezone] = useState(
//     Intl.DateTimeFormat().resolvedOptions().timeZone
//   );
//   const [currentTime, setCurrentTime] = useState("");

//   const handleTimezoneChange = (event) => {
//     setSelectedTimezone(event.target.value);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const formattedTime = moment.tz(selectedTimezone).format("HH:mm");
//       setCurrentTime(formattedTime);
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [selectedTimezone]);

//   const getTimezoneWithCurrentTime = (timezone) => {
//     const offset = moment.tz(timezone).format("Z");
//     return `${timezone} Time (${currentTime}) (UTC ${offset})`;
//   };

//   return (
//     <TimeZone>
//       <h1
//         style={{
//           color: "var(--secondary, #434956)",
//           fontFamily: "Outfit",
//           fontSize: "18px",
//           fontWeight: "600",
//           lineHeight: "normal",
//           textAlign: "left",
//         }}
//       >
//         Time Zone
//       </h1>
//       <select
//         value={selectedTimezone}
//         onChange={handleTimezoneChange}
//         className="select-dropdown"
//       >
//         {timezones.map((timezone, index) => (
//           <option key={index} value={timezone} className="select-option">
//             {getTimezoneWithCurrentTime(timezone)}
//           </option>
//         ))}
//       </select>
//     </TimeZone>
//   );
// };

// export default TimezoneList;

import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import { TimeZone } from "./DateModal.styles";

const TimezoneList = ({ selectedTimezone, onTimezoneChange }) => {
  const timezones = moment.tz.names();

  // const [selectedTimezone, setSelectedTimezone] = useState(
  //   Intl.DateTimeFormat().resolvedOptions().timeZone
  // );

  const getTimeSlots = () => {
    let slots = [];
    let current = moment.utc().startOf("day"); // Start at the beginning of the GMT day
    for (let i = 0; i < 48; i++) {
      // There are 48 half-hour slots in a day
      slots.push(current.format("HH:mm")); // This format gives the desired "12:00" style output
      current.add(30, "minutes"); // Add 30 minutes to current time
    }
    return slots;
  };

  const [timeSlots] = useState(getTimeSlots()); // Time slots are static and won't change

  const adjustedTimeSlots = timeSlots.map((slot) => {
    return moment.utc(slot, "HH:mm").tz(selectedTimezone).format("hh:mma");
  });

  const handleTimezoneChange = (event) => {
    // setSelectedTimezone(event.target.value);
    onTimezoneChange(event.target.value);
  };

  return (
    <TimeZone>
      <h1
        style={{
          color: "var(--secondary, #434956)",
          fontFamily: "Outfit",
          fontSize: "18px",
          fontWeight: "600",
          lineHeight: "normal",
          textAlign: "left",
        }}
      >
        Time Zone
      </h1>
      <select
        value={selectedTimezone}
        onChange={handleTimezoneChange}
        className="select-dropdown"
      >
        {timezones.map((timezone, index) => (
          <option key={index} value={timezone} className="select-option">
            {timezone}
          </option>
        ))}
      </select>
      {/* <ul style={{ color: "black" }}>
        {adjustedTimeSlots.map((slot, index) => (
          <li key={index}>{slot}</li>
        ))}
      </ul> */}
    </TimeZone>
  );
};

export default TimezoneList;
