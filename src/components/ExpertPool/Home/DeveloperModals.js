import React from "react";
import Image from "next/image";
import { ModalHolders } from "./DeveloperModals.styles";
import Developers from "../../../assets/images/SeoExpert/Developers-Img.png";
import { PrimaryButton } from "src/components/Button.styles";
import { BsSearch } from "react-icons/bs";
import Select from "react-select";
import chroma from "chroma-js";

const option = [
  { value: "Node Js", label: "Node Js", color: "black" },
  { value: ".Net", label: ".Net", color: "black" },
  { value: "React Js", label: "React Js", color: "black" },
  { value: "Php", label: "Php", color: "black" },
];

const customSelectStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#ffff", // Change this to your desired background color
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    console.log({ data });
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
};

const DeveloperModal = () => {
  return (
    <ModalHolders>
      <div className="img-holder">
        <Image src={Developers} alt="Developers" />
      </div>
      <form>
        <div>
          <h2>
            Hire Remote Developer in
            <br />
            24 hours
          </h2>
        </div>
        <div className="form">
          <div className="input-holder">
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-holder">
            <label>Email</label>
            <input type="text" placeholder="Ahmed@gmail.com" />
          </div>
          <div className="input-holder">
            <label>Phone No</label>
            <input type="tel" placeholder="+985526464654" />
          </div>
          <div className="input-holder has-icon">
            <label>Company</label>
            <label>
              <BsSearch className="icon" size="28px" color="#A1A1A1" />
            </label>
            <input type="text" placeholder="Webevis Technologies" />
          </div>
          <div className="input-holder">
            <label>Website URL</label>
            <input type="text" placeholder="ww.webevis.com" />
          </div>
          <div className="input-holder">
            <label>Experts</label>
            <Select
              closeMenuOnSelect={false}
              isMulti
              styles={customSelectStyles}
              options={option}
            />
          </div>
        </div>
        <div className="textarea">
          <label>Description</label>
          <textarea type="text" rows={"5"} placeholder="Description" />
        </div>
        <PrimaryButton height="50" size="23">
          Schedule Call
        </PrimaryButton>
      </form>
    </ModalHolders>
  );
};

export default DeveloperModal;
