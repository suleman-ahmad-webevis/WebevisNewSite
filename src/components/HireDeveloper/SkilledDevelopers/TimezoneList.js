import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import { TimeZone } from "./DateModal.styles";

const TimezoneList = ({ onTimezoneSelect }) => {
  const timezones = moment.tz.names();

  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [currentTime, setCurrentTime] = useState("");

  const handleTimezoneChange = (event) => {
    const timezone = event.target.value;
    setSelectedTimezone(timezone);
    onTimezoneSelect(timezone); // Call the parent's function with selected timezone
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const formattedTime = moment.tz(selectedTimezone).format("HH:mm");
      setCurrentTime(formattedTime);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedTimezone]);

  const getTimezoneWithCurrentTime = (timezone) => {
    const offset = moment.tz(timezone).format("Z");
    return `${timezone} Time (${currentTime}) (UTC ${offset})`;
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
        onChange={handleTimezoneChange} // Use onChange event
        className="select-dropdown"
      >
        {timezones.map((timezone, index) => (
          <option key={index} value={timezone} className="select-option">
            {getTimezoneWithCurrentTime(timezone)}
          </option>
        ))}
      </select>
    </TimeZone>
  );
};

export default TimezoneList;
