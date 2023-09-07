import React, { useEffect, useState, useContext } from "react";
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

import axios from "axios";
import { ToastContext } from "src/context/toastContext";

const ServiceModal = ({ type, state, modal, setModal }) => {
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState(false);
  // const [submitForm, setSubmitForm] = useState(false);
  const [formTitle, setFormTitle] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(25, "*Name must not exceed 25 characters"),
    email: Yup.string()
      .email("*Email is Invalid")
      .required("*Email is required"),
    phone_number: Yup.string().max(
      15,
      "*Phone number must not exceed 15 digits"
    ),
    company: Yup.string().max(
      50,
      "*Company name must not exceed 50 characters"
    ),
    // website: Yup.string().url("*Invalid URL"),
    // .required("*Website URL is required"),
    info: Yup.string().max(500, "*Details must not exceed 500 characters"),
    services: Yup.array()
      .min(1, "*At least one services must be selected")
      .required("*services are required"),
  });

  const [formValues, setFormValues] = useState({ website: "https://" });
  const [isWebsiteValid, setIsWebsiteValid] = useState(true); // State to track URL validity
  const handleWebsiteChange = (e, setFieldValue) => {
    const url = e.target.value;
    setFormValues((prev) => ({ ...prev, [e.target.name]: url }));
    setFieldValue("website", url);

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

  // console.log("test", process.env.NEXT_PUBLIC_STAGING_API_KEY);
  const { showToast } = useContext(ToastContext);

  return (
    <>
      <ModalHolders>
        <div className="img-holder">
          <Image src={Developer} alt="Developers" />
        </div>
        <Formik
          initialValues={{
            name: "",
            email: state,
            phone_number: "",
            company: "",
            website: "",
            services: [type] || [],
            info: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              setIsLoading(true);
              const payload = {
                name: values.name,
                email: formValues.email,
                phone_number: values.phone_number,
                company: values.company,
                company_website: formValues.website,
                services: formValues.services,
                info: values.info,
              };
              const response = await axios.post(
                `${process.env.NEXT_PUBLIC_MAIN_URL}/query/enquiry`,
                JSON.stringify(payload),
                {
                  headers: {
                    "Content-Type": "application/json",
                    "X-path": window.location.pathname,
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STAGING_API_KEY}`,
                  },
                }
              );
              console.log("API response:", response.data);

              if (response.status == 200) {
                console.log(response);
                showToast({
                  success: true,
                  text: "Thank you for considering us! We will get back to you shortly.",
                });
                resetForm();
                setModal(!modal);
              }
            } catch (error) {
              setModal(!modal);
              console.error("API error:", error);
              showToast({
                error: true,
                text: "An error occurred while submitting the form",
              });
              // console.log("An error occurred while submitting the form");
            } finally {
              setIsLoading(false);
              setSubmitting(false);
            }
          }}
        >
          {({ errors, touched, handleSubmit, setFieldValue }) => (
            <Form>
              <div>
                <h2>Start your Project</h2>
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

                <div className="input-holder">
                  <label>Phone Number</label>
                  <Field component={PhoneInputField} name="phone_number" />
                </div>
                <div className="input-holder has-icon">
                  <label>Company Name</label>
                  <label htmlFor="label" className="icon-holder">
                    <BsSearch className="icon" size="28px" color="#A1A1A1" />
                  </label>
                  <Field
                    id="label"
                    type="text"
                    name="company"
                    placeholder="Webevis Technologies"
                    maxlength="25"
                  />
                </div>
                <div className="input-holder">
                  <label>Company Website</label>
                  <Field
                    type="text"
                    name="website"
                    value={formValues.website}
                    onChange={(e) => handleWebsiteChange(e, setFieldValue)}
                    maxlength="25"
                  />
                  {/* {!isWebsiteValid && formValues.website?.trim() !== "" && (
                  <p className="error-message">URL is invalid</p>
                )} */}
                </div>
                <div
                  className={`input-holder select-input ${
                    errors.services && touched.services ? "error-border" : ""
                  }`}
                >
                  <label>
                    Select Services<span>*</span>
                  </label>
                  <Field
                    name="services"
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
                  name="info"
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
                // onClick={() => {
                //   if (errors.email || errors.phone_number) {
                //     console.log("errors occurd");
                //     showToast({
                //       error: true,
                //       text: "Please fill in all three required fields: Email and Phone Number, and select at least one Service before submitting.",
                //     });
                //   } else {
                //     handleSubmit();
                //   }
                // }}
                onClick={() => {
                  if (errors.email) {
                    showToast({
                      error: true,
                      text: "Please fill in the Email field before submitting.",
                    });
                  } else if (errors.services) {
                    showToast({
                      error: true,
                      text: "Please Select at least one Service before submitting.",
                    });
                  } else {
                    handleSubmit();
                  }
                }}
              >
                {isLoading ? (
                  <i
                    className="fa fa-circle-o-notch fa-spin"
                    style={{
                      marginRight: "5px",
                      fontSize: "24px",
                      padding: "12px 16px",
                    }}
                  ></i>
                ) : (
                  "Let's E-Meet"
                )}
              </PrimaryButton>
              <h3>
                Facing trouble in submitting the form? Simply mail us at{" "}
                <a href="mailto:info@webevis.com">info@webevis.com</a>
              </h3>
            </Form>
          )}
        </Formik>
      </ModalHolders>
      {/* <Toastify
        open={error}
        setOpen={setError}
        text="Please fill all required fields : Email and Phone Number before submitting."
        error={error}
      />
      <Toastify
        open={success}
        setOpen={setSuccess}
        text={"Thank you for considering us! We will get back to you shortly."}
        success={success}
      />
      <Toastify
        open={submitForm}
        setOpen={setSubmitForm}
        text={"An error occurred while submitting the form"}
        error={submitForm}
      /> */}
    </>
  );
};

export default ServiceModal;
