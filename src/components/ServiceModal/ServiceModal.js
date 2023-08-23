import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";
import { BsSearch } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import isValidUrl from "is-valid-http-url";
import { option } from "./ServiceModalData";
import Developer from "../../assets/images/SeoExpert/Modal-BG1.png";
import { ModalHolders } from "./ServiceModal.styles";
import SelectField from "../ExpertPool/Home/Select.js/select";
const ServiceModal = ({ type, state }) => {
  const [formValues, setFormValues] = useState({ website_url: "https://" });
  const [isWebsiteValid, setIsWebsiteValid] = useState(true); // State to track URL validity

  const handleWebsiteChange = (e) => {
    const url = e.target.value;
    setFormValues((prev) => ({ ...prev, [e.target.name]: url }));

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
  useEffect(() => {
    if (state) {
      setFormValues(state);
    }
  }, [state]);

  return (
    <ModalHolders>
      <div className="img-holder">
        <Image src={Developer} alt="Developers" />
      </div>
      <form>
        <div>
          <h2>Start your projects</h2>
        </div>
        <div className="form">
          <div className="input-holder">
            <label>Name</label>
            <input type="text" placeholder="Adam Mack" maxLength="50" />
          </div>
          <div className="input-holder">
            <label>Email</label>
            <input
              type="text"
              name="email_address"
              value={formValues?.email_address}
              placeholder="adam@webevis.com"
              maxLength="50"
            />
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
            <input
              id="label"
              type="text"
              placeholder="Webevis Technologies"
              maxLength="50"
            />
          </div>
          <div className="input-holder">
            <label>Company Website</label>

            <input
              type="text"
              name="website_url"
              value={formValues?.website_url}
              onChange={handleWebsiteChange}
              maxLength="50"
            />
            {!isWebsiteValid && formValues?.website_url?.trim() !== "" && (
              <p className="error-message">URL is invalid</p>
            )}
          </div>
          <div className="input-holder select-input">
            <label>Services</label>
            <SelectField arr={option} type={type} />
          </div>
        </div>
        <div className="textarea">
          <label>Share other important details</label>
          <textarea
            type="text"
            maxLength="500"
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

export default ServiceModal;
