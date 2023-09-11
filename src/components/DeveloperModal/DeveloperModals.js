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
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PhoneInputField from "./PhoneInputField";
import axios from "axios";
import { ToastContext } from "src/context/toastContext";
import Link from "next/link";
import Loader from "../Loader/formLoader";

const DeveloperModal = ({ type, heading, setOpen, setModal, modal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [website, setWebsite] = React.useState("https://");
  const [isWebsiteValid, setIsWebsiteValid] = React.useState(true);
  const { showToast } = useContext(ToastContext);

  const handleWebsiteChange = (e) => {
    const url = e.target.value;
    setWebsite(url);
    if (url.trim() === "https://") {
      setIsWebsiteValid(true);
    } else {
      setIsWebsiteValid(isValidUrl(url));
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(25, "*Name must not exceed 25 characters"),
    email: Yup.string()
      .email("*Email is Invalid")
      .required("*Email is required"),
    phone_number: Yup.string().max(
      15,
      "*Phone number must not exceed 15 digits"
    ),
    company_name: Yup.string().max(
      50,
      "*Company name must not exceed 50 characters"
    ),
    // website: Yup.string().url("*Invalid URL"),
    // .required("*Website URL is required"),
    info: Yup.string().max(500, "*Details must not exceed 500 characters"),
    resources: Yup.array()
      .min(1, "*At least one resource must be selected")
      .required("*Resources are required"),
    termsCheckbox: Yup.boolean()
      .oneOf([true], "You must accept terms and conditions")
      .required("*You must accept terms and conditions"),
  });

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
          resources: type ? [type] : [],
          info: "",
          termsCheckbox: false,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            setIsLoading(true);
            const payload = {
              name: values.name,
              email: values.email,
              phone_number: values.phone_number,
              company: values.company_name,
              company_website: website,
              resources: values.resources,
              info: values.info,
              formTitle: "Hire dedicated resources",
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
            showToast({
              error: true,
              text: "An error occurred while submitting the form",
            });
            setModal(!modal);
          } finally {
            setIsLoading(false);
            setSubmitting(false);
          }
        }}
      >
        {({ errors, touched }) => (
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
                  name="company_name"
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
                {/* {!isWebsiteValid && website?.trim() !== "" && (
                  <p className="error-message">URL is invalid</p>
                )} */}
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
            <label className="check-box">
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
              <span for="termsCheckbox">
                I understand and agree to the{" "}
                <Link href="/terms-conditions" id="termsLink">
                  terms & conditions
                </Link>
              </span>
            </label>
            <PrimaryButton
              height="50"
              minheight="40"
              size="23"
              weight="500"
              minsize="18"
              type="submit"
              flex="flex"
              items="center"
              justify="center"
            >
              {isLoading ? (
                // <i
                //   className="fa fa-circle-o-notch fa-spin"
                //   style={{
                //     marginRight: "5px",
                //     fontSize: "24px",
                //     padding: "12px 16px",
                //   }}
                // ></i>
                <Loader />
              ) : (
                "Let's E-Meet"
              )}
            </PrimaryButton>
            <h3>
              Facing trouble in submitting the form? Simply mail us a {""}
              <a href="mailto:info@webevis.com">info@webevis.com</a>
            </h3>{" "}
          </Form>
        )}
      </Formik>
    </ModalHolders>
  );
};

export default DeveloperModal;
