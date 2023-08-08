import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ModalHolders } from "./DeveloperModals.styles";
import Developers from "../../../assets/images/SeoExpert/Developers-Img.png";
import { PrimaryButton } from "src/components/Button.styles";
import { BsSearch } from "react-icons/bs";
import Select from "react-select";
import chroma from "chroma-js";
import PhoneInput, { useCountry } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";

const option = [
  { value: "Node Js", label: "Node Js", color: "red" },
  { value: ".Net", label: ".Net", color: "black" },
  { value: "React Js", label: "React Js", color: "green" },
  { value: "Seo", label: "Seo", color: "blue" },
  { value: "Smm", label: "Smm", color: "orange" },
  { value: "PPC", label: "PPC", color: "purple" },
];

const colourStyles = {
  control: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: "white",
    cursor: "pointer",
    borderColor: isFocused ? "#28B781" : "#D9D9D9",
    boxShadow: isFocused ? " 1px solid #28B781" : "none",
    padding: "5px",
    boxShadow:
      " 0px 0.9781021475791931px 2.9343066215515137px 0px rgba(0, 0, 0, 0.14)",
    "&:hover": {
      borderColor: "none",
    },
    ".css-1xc3v61-indicatorContainer": {
      transform: isSelected ? "rotateX(180deg)" : "rotateX(0deg)",
      transition: "transform 0.9s ease",
      span: {
        display: "none",
      },
    },
    ".css-1u9des2-indicatorSeparator": {
      display: "none",
    },
    ".css-qbdosj-Input": {
      input: {
        display: "none",
      },
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};
const DeveloperModal = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  // const [country, setCountry] = useState({});
  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };
  // useEffect(() => {
  //   getGeoInfo();
  // }, []);

  // const getGeoInfo = () => {
  //   axios
  //     .get("https://api.country.is/")
  //     .then((response) => {
  //       console.log("response", response);
  //       let data = response.data;
  //       setCountry(data.country);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <ModalHolders>
      <div className="img-holder">
        <Image src={Developers} alt="Developers" />
      </div>
      <form>
        <div>
          <h2>
            Hire Dedicated Resources in
            <br />
            12 hours
          </h2>
        </div>
        <div className="form">
          <div className="input-holder">
            <label>Name</label>
            <input type="text" placeholder="Adam Mack" />
          </div>
          <div className="input-holder">
            <label>Email</label>
            <input type="text" placeholder="adam@webevis.com" />
          </div>
          <div className="input-holder">
            <label>Phone Number</label>
            <PhoneInput
              defaultCountry="US"
              value="+1"
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div className="input-holder has-icon">
            <label>Company Website</label>
            <label for="label" className="icon-holder">
              <BsSearch className="icon" size="28px" color="#A1A1A1" />
            </label>
            <input id="label" type="text" placeholder="Webevis Technologies" />
          </div>
          <div className="input-holder">
            <label>Company Website</label>
            <input type="text" placeholder="ww.webevis.com" />
          </div>
          <div className="input-holder">
            <label>Select Skills</label>
            <Select
              closeMenuOnSelect={false}
              isMulti
              styles={colourStyles}
              options={option}
            />
          </div>
        </div>
        <div className="textarea">
          <label>Share other important details</label>
          <textarea
            type="text"
            rows={"5"}
            placeholder="Please share anything that will help prepare for our meeting."
          />
        </div>
        <PrimaryButton height="50" minheight="40" size="23" minsize="18">
          Schedule Call
        </PrimaryButton>
        <h3>
          Facing trouble in submiting form? them simply mail us in{" "}
          <a href="mailto:info@webevis.com"> info@webevis.com</a>
        </h3>
      </form>
    </ModalHolders>
  );
};

export default DeveloperModal;
