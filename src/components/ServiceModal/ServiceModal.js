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
import SelectField from "../DeveloperModal/Select/Select";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInputField from "../DeveloperModal/PhoneInputField";

const ServiceModal = ({ type, state }) => {
  const [formTitle, setFormTitle] = useState();
  console.log("title", formTitle);
  const validationSchema = Yup.object().shape({
    name: Yup.string().max(25, "Name must not exceed 25 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .max(15, "Phone number must not exceed 15 digits"),
    companyName: Yup.string().max(
      50,
      "Company name must not exceed 50 characters"
    ),
    website: Yup.string()
      .url("Invalid URL")
      .required("Website URL is required"),
    details: Yup.string().max(500, "Details must not exceed 500 characters"),
    resources: Yup.array()
      .min(1, "At least one resource must be selected")
      .required("Resources are required"),
  });

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
      <Formik
        initialValues={{
          email: "",
          phone: "",
          resources: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form Data:", values);
          setFormTitle("Hire Remote Developer in 24 hours");
        }}
      >
        <Form>
          <div>
            <h2>Start your projects</h2>
          </div>
          <div className="form">
            <div className="input-holder">
              <label>Name</label>
              <Field
                type="text"
                name="name"
                placeholder="Adam Mack"
                maxlength="25"
              />
            </div>
            <div className="input-holder">
              <label>Email</label>
              <Field type="text" name="email" placeholder="adam@webevis.com" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="input-holder">
              <label>Phone Number</label>
              <Field component={PhoneInputField} name="phone" />
            </div>
            <div className="input-holder has-icon">
              <label>Company Name</label>
              <label htmlFor="label" className="icon-holder">
                <BsSearch className="icon" size="28px" color="#A1A1A1" />
              </label>
              <Field
                id="label"
                type="text"
                name="companyName"
                placeholder="Webevis Technologies"
                maxlength="25"
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
              {!isWebsiteValid && formValues?.website_url.trim() !== "" && (
                <p className="error-message">URL is invalid</p>
              )}
            </div>
            <div className="input-holder select-input">
              <label>Select Services</label>
              <Field
                name="resources"
                component={SelectField}
                arr={option}
                type={type}
              />
              <ErrorMessage
                name="resources"
                component="div"
                className="error-message"
              />
            </div>
          </div>
          <div className="textarea">
            <label>Share other important details</label>
            <Field
              component="textarea"
              rows={5}
              name="details"
              placeholder="Please share anything that will help prepare for our meeting."
              maxlength="500"
            />
          </div>
          <PrimaryButton
            height="50"
            minheight="40"
            size="23"
            weight="500"
            minsize="18"
            type="submit"
            onClick={() => {
              setFormTitle("Hire Remote Developer in 24 hours");
            }}
          >
            {"Let's"} E-Meet
          </PrimaryButton>
          <h3>
            Facing trouble in submitting the form? Simply mail us at{" "}
            <a href="mailto:info@webevis.com">info@webevis.com</a>
          </h3>
        </Form>
      </Formik>
    </ModalHolders>
  );
};

export default ServiceModal;
