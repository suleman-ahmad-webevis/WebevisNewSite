import React from "react";
import { DateHolder } from "./DateModalstyles";
import Image from "next/image";
import Logo from "../../../assets/images/HireDeveloper/Modal-Logo.png";
import { BsClock } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const DateModal = () => {
  return (
    <DateHolder>
      <div className="Content">
        <div className="image-holder">
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="company-content">
          <div className="span">
            <span>Company Webevis</span>
          </div>
          <h2>Schedule a Consultation Dedicated Developers </h2>
          <ul>
            <li>
              <BsClock size="20px" />
              15m
            </li>
            <li>
              <GoDeviceCameraVideo size="30px" />
              Web conferencing details provided upon confirmation.
            </li>
          </ul>
          <p>Book a call to catch up with our solutions experts.</p>
          <div className="Cookie">
            <span>Cookie Settings</span>
            <span>Report Abuse</span>
          </div>
        </div>
      </div>
      <div className="Calendar">
        <h2>Select a Date & Time</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem>
            <StaticDatePicker defaultValue={dayjs("2022-04-17")} />
          </DemoItem>
        </LocalizationProvider>
      </div>
    </DateHolder>
  );
};

export default DateModal;
