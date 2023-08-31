import React, { useState } from "react";
import Image from "next/image";
import { ModalHolders } from "./DeveloperModals.styles";
import { PrimaryButton } from "src/components/Button.styles";
import { BsSearch } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import isValidUrl from "is-valid-http-url";
import Developer from "../../assets/images/SeoExpert/Developers-Img.png";
import { option } from "./ModalData";
import SelectField from "./Select/Select";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { isValidPhoneNumber } from "libphonenumber-js";
import PhoneInputField from "./PhoneInputField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeveloperModal = ({ type, heading }) => {
  const [formTitle, setFormTitle] = useState();
  console.log("title", formTitle);
  const validationSchema = Yup.object().shape({
    name: Yup.string().max(25, "*Name must not exceed 25 characters"),
    email: Yup.string()
      .email("*Email is Invalid")
      .required("*Email is required"),
    phone: Yup.string()
      .required("*Phone number is required")
      .max(15, "*Phone number must not exceed 15 digits"),
    companyName: Yup.string().max(
      50,
      "*Company name must not exceed 50 characters"
    ),
    website: Yup.string().url("*Invalid URL"),
    // .required("*Website URL is required"),
    details: Yup.string().max(500, "*Details must not exceed 500 characters"),
    resources: Yup.array()
      .min(1, "*At least one resource must be selected")
      .required("*Resources are required"),
  });

  const [website, setWebsite] = React.useState("https://");
  const [isWebsiteValid, setIsWebsiteValid] = React.useState(true);
  const handleWebsiteChange = (e) => {
    const url = e.target.value;
    setWebsite(url);

    if (url.trim() === "https://") {
      setIsWebsiteValid(true);
    } else {
      setIsWebsiteValid(isValidUrl(url));
    }
  };

  return (
    <ModalHolders>
      <ToastContainer />
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
        onSubmit={(values, { setSubmitting }) => {
          console.log("Form Data:", values);
          setFormTitle("Hire Remote Developer in 24 hours");
          setSubmitting(false);
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form>
            <div>
              <h2>Hire Remote Developer in 24 hours</h2>
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
              <div
                className={`input-holder ${
                  errors.email && touched.email ? "error-border" : ""
                }`}
              >
                <label>
                  Email<span>*</span>
                </label>
                <Field
                  type="text"
                  name="email"
                  placeholder="adam@webevis.com"
                />
              </div>
              <div
                className={`input-holder ${
                  errors.phone && touched.phone ? "error-border" : ""
                }`}
              >
                <label>
                  Phone Number<span>*</span>
                </label>
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
                <Field
                  type="text"
                  name="website"
                  value={website}
                  onChange={handleWebsiteChange}
                  maxlength="25"
                />
                {!isWebsiteValid && website.trim() !== "" && (
                  <p className="error-message">URL is invalid</p>
                )}
              </div>
              <div
                className={`input-holder select-input ${
                  errors.resources && touched.resources ? "error-border" : ""
                }`}
              >
                <label>
                  Select Resources<span>*</span>
                </label>
                <Field
                  name="resources"
                  component={SelectField}
                  arr={option}
                  type={type}
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
                // Check for errors here
                if (Object.keys(errors).length > 0) {
                  Object.values(errors).forEach((errorMessage) => {
                    toast.error(errorMessage);
                  });
                } else {
                  handleSubmit();
                }
              }}
            >
              {"Let's"} E-Meet
            </PrimaryButton>
            <h3>
              Facing trouble in submitting the form? Simply mail us a {""}
              <a href="mailto:info@webevis.com">info@webevis.com</a>
            </h3>
          </Form>
        )}
      </Formik>
    </ModalHolders>
  );
};

export default DeveloperModal;
