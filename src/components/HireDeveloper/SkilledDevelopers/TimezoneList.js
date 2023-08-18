import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const TimezoneList = () => {
  const timezones = moment.tz.names();

  const [selectedTimezone, setSelectedTimezone] = useState("America/New_York"); // Set US Eastern Time as the default time zone
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
    width: "311px",
    height: "33px",
    borderRadius: "51px",
    background: "#ECECEC",
    color: "var(--secondary, #434956)",
    textEdge: "cap",
    fontFamily: "Outfit",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    border: "transparent",
    marginTop: "10px",
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
      {/* <p style={{ color: "red", marginTop: "10px" }}>
        Selected Time Zone: {getTimezoneWithCurrentTime(selectedTimezone)}
      </p> */}
    </div>
  );
};

export default TimezoneList;
