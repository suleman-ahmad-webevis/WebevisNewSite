import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ModalHolders } from "./DeveloperModals.styles";
import { PrimaryButton } from "src/components/Button.styles";
import { BsSearch } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import isValidUrl from "is-valid-http-url";
import Developer from "../../../assets/images/SeoExpert/Developers-Img.png";
import { option } from "./ModalData";
import SelectField from "./Select/Select";
const DeveloperModal = ({ type }) => {
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
  return (
    <ModalHolders>
      <div className="img-holder">
        <Image src={Developer} alt="Developers" />
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
            <input type="text" maxLength="50" placeholder="Adam Mack" />
          </div>
          <div className="input-holder">
            <label>Email</label>
            <input type="text" maxLength="50" placeholder="adam@webevis.com" />
          </div>
          <div className="input-holder">
            <label>Phone Number</label>
            <PhoneInput
              defaultCountry="US"
              value="+1"
              maxLength="50"
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div className="input-holder has-icon">
            <label>Company Name</label>
            <label for="label" className="icon-holder">
              <BsSearch className="icon" size="28px" color="#A1A1A1" />
            </label>
            <input
              id="label"
              type="text"
              maxLength="50"
              placeholder="Webevis Technologies"
            />
          </div>
          <div className="input-holder">
            <label>Company Website</label>

            <input
              type="text"
              maxLength="50"
              value={website}
              onChange={handleWebsiteChange}
            />
            {!isWebsiteValid && website.trim() !== "" && (
              <p className="error-message">URL is invalid</p>
            )}
          </div>
          <div className="input-holder select-input">
            <label>Select Resources</label>
            <SelectField arr={option} type={type} />
          </div>
        </div>
        <div className="textarea">
          <label>Share other important details</label>
          <textarea
            type="text"
            rows={"5"}
            maxLength="500"
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
