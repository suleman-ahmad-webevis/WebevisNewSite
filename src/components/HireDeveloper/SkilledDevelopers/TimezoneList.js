import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const TimezoneList = () => {
  const timezones = moment.tz.names();

  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [currentTime, setCurrentTime] = useState("");

  const handleTimezoneChange = (event) => {
    setSelectedTimezone(event.target.value);
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

  const dropdownStyle = {
    width: "100%",
    maxWidth: "311px",
    height: "33px",
    borderRadius: "51px",
    background: "#ECECEC",
    color: "#434956", // Change font color
    fontFamily: "Outfit",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "normal",
    border: "transparent",
    marginTop: "10px",
    padding: "5px",
  };

  return (
    <div style={{ width: "100%", textAlign: "left" }}>
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
        style={dropdownStyle}
      >
        {timezones.map((timezone, index) => (
          <option key={index} value={timezone}>
            {getTimezoneWithCurrentTime(timezone)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimezoneList;
