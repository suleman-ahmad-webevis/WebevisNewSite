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
import Link from "next/link";

const ServiceModal = ({
  type,
  state,
  state1,
  selectedOption,
  modal,
  setModal,
}) => {
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
    website: Yup.string().url("*Invalid URL"),
    info: Yup.string().max(500, "*Details must not exceed 500 characters"),
    services: Yup.array()
      .min(1, "*At least one services must be selected")
      .required("*services are required"),
    termsCheckbox: Yup.boolean()
      .oneOf([true], "You must accept terms and conditions")
      .required("*You must accept terms and conditions"),
  });

  const { showToast } = useContext(ToastContext);
  const [formValues, setFormValues] = useState({ website: "https://" });
  const [resetSelectField, setResetSelectField] = useState(false);
  const [key, setKey] = useState(0);
  const [isWebsiteValid, setIsWebsiteValid] = useState(true);

  const handleWebsiteChange = (e, setFieldValue) => {
    const url = e.target.value;
    setFormValues((prev) => ({ ...prev, [e.target.name]: url }));
    setFieldValue("website", url);

    if (url.trim() == "https://") {
      setIsWebsiteValid(true);
    } else {
      setIsWebsiteValid(isValidUrl(url));
    }
  };

  // const [phoneNumber, setPhoneNumber] = useState();
  // const handlePhoneNumberChange = (value) => {
  //   setPhoneNumber(value);
  // };

  useEffect(() => {
    if (state) {
      setFormValues(state);
    }
  }, [state]);

  useEffect(() => {
    if (resetSelectField) {
      setResetSelectField(false);
      setKey((prevKey) => prevKey + 1);
    }
  }, [resetSelectField]);

  useEffect(() => {
    if (state1) {
      setFormValues(state1);
    }
  }, [state1]);

  useEffect(() => {
    if (selectedOption) {
      setFormValues(selectedOption);
    }
  }, [selectedOption]);

  return (
    <ModalHolders>
      <div className="img-holder">
        <Image src={Developer} alt="Developers" />
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone_number: "",
          company: "",
          website: "",
          services: [],
          info: "",
          formTitle: "Start your projects",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            setIsLoading(true);
            const payload = {
              name: values.name,
              email: values.email,
              phone_number: values.phone_number,
              company: values.company,
              company_website: values.website,
              services: values.services,
              info: values.info,
            };
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_MAIN_URL}/query/enquiry`,
              JSON.stringify(payload),
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_STAGING_API_KEY}`,
                },
              }
            );
            if (response.status == 200 || response.status == 201) {
              showToast({
                success: true,
                text: "Thank you for considering us! We will get back to you shortly.",
              });
              resetForm();
              setModal(!modal);
            }
          } catch (error) {
            setModal(!modal);
            showToast({
              error: true,
              text: "An error occurred while submitting the form",
            });
          } finally {
            setIsLoading(false);
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          isSubmitting,
          touched,
          setFieldValue,
          isValid,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
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
                <label>
                  Phone Number<span>*</span>
                </label>
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
                  placeholder="https://"
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
                  reset={resetSelectField}
                  key={key}
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
            <div className="check-box">
              <Field
                type="checkbox"
                id="termsCheckbox"
                name="termsCheckbox"
                className={
                  errors.termsCheckbox && touched.termsCheckbox
                    ? "error-border"
                    : ""
                }
              />
              <span>
                I understand and agree to the{" "}
                <a href="#" id="termsLink">
                  terms & conditions
                </a>
              </span>
            </div>
            <PrimaryButton
              height="50"
              minheight="40"
              size="23"
              weight="500"
              minsize="18"
              type="submit"
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
  );
};

export default ServiceModal;
