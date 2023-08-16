import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ModalHolders } from "./DeveloperModals.styles";
import Developers from "../../../assets/images/SeoExpert/Developers-Img.png";
import { PrimaryButton } from "src/components/Button.styles";
import { BsSearch } from "react-icons/bs";
import Select, { components } from "react-select";
import chroma from "chroma-js";
import PhoneInput, { useCountry } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import isValidUrl from "is-valid-http-url";
import { option } from "./ModalData";

const DeveloperModal = ({ type }) => {
  const randomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${"0".repeat(6 - color.length)}${color}`;
  };
  const optionWithRandomColors = option.map((opt) => ({
    ...opt,
    color: randomColor(),
  }));

  console.log({ type, optionWithRandomColors });

  const defaultSelectedOption = optionWithRandomColors.find(
    ({ value }) => value === type
  );

  const colourStyles = {
    control: (styles, { isFocused, isSelected }) => ({
      ...styles,
      maxHeight: "80px",
      overflow: "auto",
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
        display: "block",
        height: isFocused ? "35px" : "0",
        padding: "0",
      },
      // ".css-19bb58m": {
      //   input: {
      //     maxHeight: "15px",
      //   },
      // },
    }),
    menu: (styles) => ({
      ...styles,
      maxHeight: "180px",
    }),
    menuList: (styles) => ({
      ...styles,
      maxHeight: "180px", // Set the maximum height for the list
      overflowY: "auto", // Enable vertical scroll if needed
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        padding: "10px",
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
  const InputOption = ({
    getStyles,
    Icon,
    isDisabled,
    isFocused,
    isSelected,
    children,
    innerProps,
    ...rest
  }) => {
    const [isActive, setIsActive] = useState(false);
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);
    const onMouseLeave = () => setIsActive(false);

    // styles
    let bg = "transparent";
    let color = "black";
    if (isFocused) bg = "#eee";
    if (isActive) color = " #28B781";

    const style = {
      alignItems: "center",
      backgroundColor: bg,
      color: color,
      // color: "inherit",
      display: "flex ",
    };

    // prop assignment
    const props = {
      ...innerProps,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
      style,
    };
    const pseudoCheckboxStyle = {
      marginRight: "8px",
      cursor: "pointer",
      position: "relative",
      width: "16px",
      height: "16px",
      border: "1px solid #D9D9D9",
      backgroundColor: isSelected ? "#28B781" : "transparent",
      borderRadius: "3px",
    };

    const customCheckmarkStyle = {
      position: "absolute",
      top: "2px",
      left: "4px",
      width: "6px",
      height: "8px",
      border: "2px solid white",
      borderLeft: "none",
      borderTop: "none",
      transform: isSelected ? "rotate(45deg)" : "rotate(0deg)",
      visibility: isSelected ? "visible" : "hidden",
    };
    return (
      <components.Option
        {...rest}
        isDisabled={isDisabled}
        isFocused={isFocused}
        isSelected={isSelected}
        getStyles={getStyles}
        innerProps={props}
      >
        {/* <input
          type="checkbox"
          style={pseudoCheckboxStyle}
          checked={isSelected}
        /> */}
        <div style={pseudoCheckboxStyle}>
          <div style={customCheckmarkStyle}></div>
        </div>

        {children}
      </components.Option>
    );
  };
  const [website, setWebsite] = useState("https://"); // State to store the website URL
  const [isWebsiteValid, setIsWebsiteValid] = useState(true); // State to track URL validity

  const handleWebsiteChange = (e) => {
    const url = e.target.value;
    setWebsite(url);

    if (url.trim() == "https://") {
      setIsWebsiteValid(true);
    } else {
      setIsWebsiteValid(isValidUrl(url)); // Check if the URL is valid
    }
  };
  const [phoneNumber, setPhoneNumber] = useState();
  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };
  const [selectedOptions, setSelectedOptions] = useState([]);
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
            <label>Company Name</label>
            <label for="label" className="icon-holder">
              <BsSearch className="icon" size="28px" color="#A1A1A1" />
            </label>
            <input id="label" type="text" placeholder="Webevis Technologies" />
          </div>
          <div className="input-holder">
            <label>Company Website</label>

            <input type="text" value={website} onChange={handleWebsiteChange} />
            {!isWebsiteValid && website.trim() !== "" && (
              <p className="error-message">URL is invalid</p>
            )}
          </div>
          <div className="input-holder select-input">
            <label>Select Resources</label>
            <Select
              className="Select"
              closeMenuOnSelect={false}
              isMulti
              styles={colourStyles}
              options={optionWithRandomColors}
              hideSelectedOptions={false}
              defaultValue={[]}
              onChange={(options) => {
                if (Array.isArray(options)) {
                  setSelectedOptions(options.map((opt) => opt.value));
                }
              }}
              components={{
                Option: InputOption,
              }}
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

        <PrimaryButton
          height="50"
          minheight="40"
          size="23"
          weight="500"
          minsize="18"
        >
          {"Let's"} E-Meet
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
