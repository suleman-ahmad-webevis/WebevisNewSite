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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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
    website: Yup.string().url("Invalid URL"),
    details: Yup.string().max(500, "Details must not exceed 500 characters"),
    resources: Yup.array()
      .min(1, "Please Select at least one Service")
      .required("Services are required"),
  });

  const [formValues, setFormValues] = useState({
    website_url: "https://",
  });
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
        // onSubmit={(values, { setSubmitting }) => {
        //   console.log("Form Data:", values);
        //   setFormTitle("Hire Remote Developer in 24 hours");
        //   setSubmitting(false);
        // }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const payload = {
              name: "Suleman Ahmadd",
              email: "suleman@webevis.com",
              phone_number: "+923134766646",
              company: "Webevis",
              company_website: "https://webevis.com",
              services: [
                {
                  value: "SEO",
                  label: "SEO",
                },
              ],
              info: "I need developer.",
            };
            const response = await axios.post(
              "https://staging.crm.webevis.com/query/enquiry",

              // `${process.env.BASE_URL}/query/enquiry`,
              payload
            );
            console.log("API response:", response.data);

            if (response.status === 200) {
              toast.success("Message sent successfully!", {
                className: "custom-toast-success",
              });
            } else {
              throw new Error("Failed to submit form");
            }
          } catch (error) {
            console.error("API error:", error);
            toast.error("An error occurred while submitting the form");
          }

          setSubmitting(false);
        }}
      >
        {({ errors, touched, handleSubmit }) => (
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
              <div
                className={`input-holder ${
                  errors.email && touched.email ? "error-border" : ""
                }`}
              >
                <label>
                  Email<span>*</span>
                </label>
                <input
                  type="text"
                  name="email_address"
                  value={formValues?.email_address}
                  placeholder="adam@webevis.com"
                />
              </div>

              <div className="input-holder">
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
                <label>
                  Select Services<span>*</span>
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
