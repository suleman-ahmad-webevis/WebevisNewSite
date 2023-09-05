import React, { useContext, useState } from "react";
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
import axios from "axios";
import { ToastContext } from "src/context/toastContext";

const DeveloperModal = ({ type, heading, setOpen, setModal, modal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formTitle, setFormTitle] = useState();
  const [submitForm, setSubmitForm] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(25, "*Name must not exceed 25 characters"),
    email: Yup.string()
      .email("*Email is Invalid")
      .required("*Email is required"),
    phone_number: Yup.string()
      .required("*Phone number is required")
      .max(15, "*Phone number must not exceed 15 digits"),
    company_name: Yup.string().max(
      50,
      "*Company name must not exceed 50 characters"
    ),
    website: Yup.string().url("*Invalid URL"),
    // .required("*Website URL is required"),
    info: Yup.string().max(500, "*Details must not exceed 500 characters"),
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

  console.log("test", process.env.NEXT_PUBLIC_MAIN_URL);
  const { showToast } = useContext(ToastContext);

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
          company_name: "",
          website: "",
          resources: [],
          info: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log("values", values);
          try {
            setIsLoading(true);

            const payload = {
              name: values.name,
              email: values.email,
              phone_number: values.phone_number,
              company: values.company_name,
              company_website: values.website,
              resources: values.resources,
              info: values.details,
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
            if (response.status === 200) {
              resetForm();
              setModal(!modal);
              showToast({
                success: true,
                text: "Thank you for considering us! We will get back to you shortly.",
              });
            }
          } catch (error) {
            setModal(!modal);

            showToast({
              error: true,
              text: "An error occurred while submitting the form",
            });
            setSubmitForm(true);
            console.log("An error occurred while submitting the form");
          } finally {
            setIsLoading(false);
            setSubmitting(false);
          }
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form>
            <div>
              <h2>Hire Dedicated Resources in 12 hours</h2>
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
                  errors.phone_number && touched.phone_number
                    ? "error-border"
                    : ""
                }`}
              >
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
                  name="company_name"
                  placeholder="Webevis Technologies"
                  maxlength="25"
                />
              </div>
              <div
                className={`input-holder ${
                  !isWebsiteValid && website?.trim() !== ""
                    ? "error-border"
                    : ""
                }`}
              >
                <label>Company Website</label>
                <Field
                  type="text"
                  name="website"
                  value={website}
                  onChange={handleWebsiteChange}
                  maxlength="25"
                />
                {!isWebsiteValid && website?.trim() !== "" && (
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
              onClick={() => {
                if (errors.email || errors.phone_number) {
                  showToast({
                    error: true,
                    text: "Please fill in all three required fields: Email and Phone Number, and select at least one Resource before submitting.",
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
