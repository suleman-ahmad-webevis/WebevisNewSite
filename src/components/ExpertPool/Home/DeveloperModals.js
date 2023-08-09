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
import isValidUrl from "is-valid-http-url";
const option = [
  { value: "Node Js", label: "Node Js" },
  { value: ".Net", label: ".Net" },
  { value: "React Js", label: "React Js" },
  { value: "Seo", label: "Seo" },
  { value: "Smm", label: "Smm" },
  { value: "PPC", label: "PPC" },
  { value: "Content Writer", label: "Content Writer" },
  { value: "Email Expert", label: "Email Expert" },
  { value: "Full Stack", label: "Full Stack" },
  { value: "Laravel", label: "Laravel" },
  { value: "python", label: "python" },
  { value: "UI/UX", label: "UI/UX" },
  { value: "Angular", label: "Angular" },
  { value: "React Native", label: "React Native" },
  { value: "Java", label: "Java" },
  { value: "Android", label: "Android" },
  { value: "swift", label: "swift" },
  { value: "SQA", label: "SQA" },
  { value: "Penetration Tester", label: "Penetration Tester" },
  { value: "Project Cordinator", label: "Project Cordinator" },
  {
    value: "Automation Engineer",
    label: "Automation Engineer",
    color: "purple",
  },
];
const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const optionWithRandomColors = option.map((opt) => ({
  ...opt,
  color: randomColor(),
}));
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
      display: "none",
      margin: "0",
      padding: "0",
      height: isFocused ? "auto" : "20px",
    },
  }),
  menu: (styles) => ({
    ...styles,
    maxHeight: "220px",
  }),
  menuList: (styles) => ({
    ...styles,
    maxHeight: "220px", // Set the maximum height for the list
    overflowY: "auto", // Enable vertical scroll if needed
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
      color: "red",
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
  const [website, setWebsite] = useState(""); // State to store the website URL
  const [isWebsiteValid, setIsWebsiteValid] = useState(true); // State to track URL validity

  const handleWebsiteChange = (e) => {
    const url = e.target.value;
    setWebsite(url);

    if (url.trim() == "") {
      setIsWebsiteValid(true);
    } else {
      setIsWebsiteValid(isValidUrl(url)); // Check if the URL is valid
    }
  };
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
            <input
              id="label"
              type="text"
              placeholder="Webevis Technologies"
              value={website}
              onChange={handleWebsiteChange}
            />
            {!isWebsiteValid && website.trim() !== "" && (
              <p className="error-message">URL is invalid</p>
            )}
          </div>
          <div className="input-holder">
            <label>Company Website</label>
            <input type="text" placeholder="ww.webevis.com" />
          </div>
          <div className="input-holder">
            <label>Select Resources</label>
            <Select
              closeMenuOnSelect={false}
              isMulti
              styles={colourStyles}
              options={optionWithRandomColors}
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
